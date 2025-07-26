import jwt from 'jsonwebtoken';
import User from '../models/userModel.js';

const secureRoute = async (req, res, next) => {
    const token = req.cookies.token;

    if (!token) {
        return res.status(401).json({ message: 'Unauthorized access' });
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        const user = await User.findById(decoded.id);

        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        req.user = user; // Attach user to request object
        next();
    } catch (error) {
        console.error('Error in secureRoute middleware: ', error);
        res.status(401).json({ message: 'Invalid token' });
    }
}