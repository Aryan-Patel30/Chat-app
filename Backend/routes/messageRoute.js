import express from 'express';
import { sendMessage } from '../controller/messageController.js';
import secureRoute from '../middleware/secureRoute.js';

const router = express.Router();
router.post("/send/:id",secureRoute, sendMessage);

export default router;