import User from '../models/userModel.js';
import bcrypt from 'bcryptjs';
import createToken from '../JWT/generateToken.js';
import e from 'express';

export const signup = async (req, res) => {
    const { fullname, email, password, confirmPassword } = req.body;

    try {
    if (!fullname || !email || !password || !confirmPassword) {
        return res.status(400).json({ message: 'All fields are required' });
    }

    if (password !== confirmPassword) {
        return res.status(400).json({ message: 'Passwords do not match' });
    }
    if (password.length < 6) {
        return res.status(400).json({ message: 'Password must be at least 6 characters long' });
    }
    const user = await User.findOne({ email });
    if (user) {
        return res.status(400).json({ message: 'User already exists' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = await new User({
        fullname,
        email,
        password : hashedPassword,
    });
    await newUser.save();
    if (newUser) {
        createToken(newUser._id, res);
        res.status(201).json({ message: 'User created successfully',
            user: {
                id: newUser._id,
                fullname: newUser.fullname,
                email: newUser.email,
            }
         });
    }
} catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  } 
}

export const login = async (req, res) => {
    const { email, password } = req.body;

    try {
        if (!email || !password) {
            return res.status(400).json({ message: 'Email and password are required' });
        }

        const user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({ message: 'User does not exist' });
        }

        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            return res.status(400).json({ message: 'Invalid credentials' });
        }

        createToken(user._id, res);
        res.status(200).json({ message: 'Login successful',
            user: {
                id: user._id,
                fullname: user.fullname,
                email: user.email,
            }
         });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
}

export const logout = async (req, res) => {
    try {
        res.clearCookie('token');
        res.status(200).json({ message: 'Logout successful' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
}

export const getAllUser = async (req, res) => {
    try {
        const loggedInUserId = req.user._id; // Assuming you have middleware to set req.user
        const filteredUsers = await User.find({_id : {$ne: loggedInUserId}}, '-password'); // Exclude password field
        res.status(200).json(filteredUsers);
    } catch (error) {
        console.log("Error in getAllUser controller: " + error);
        res.status(500).json({ message: 'Internal server error' });
    }
}
