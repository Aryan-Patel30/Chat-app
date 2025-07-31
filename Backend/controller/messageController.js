import Conversation from '../models/Conversation.js';
import Message from '../models/Message.js';

export const sendMessage = async (req, res) => {
    try{
        const { message } = req.body;
        const { id:receiverId } = req.params;
        const senderId = req.user._id; 
        let conversation = await Conversation.findOne({ 
            members: { $all: [senderId, receiverId] }
        })
        if (!conversation) {
            conversation = await Conversation.create({
                members: [senderId, receiverId]
            })
        }
        const newMessage = new Message({ 
            senderId,
            receiverId,
            message
        })
        if(newMessage) {
            conversation.messages.push(newMessage._id);
        }
        // await newMessage.save();
        // await conversation.save();
        await Promise.all([
            newMessage.save(),
            conversation.save()
        ]);
        res.status(200).json({
            message: 'Message sent successfully',
            newMessage
        });


    } catch (error) {
        console.error("Error in sendMessage", error);
        res.status(500).json({ message: 'Internal server error' });
    }
}