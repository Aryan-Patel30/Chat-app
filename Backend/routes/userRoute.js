import express from "express";
import { signup, login, logout, getAllUser} from "../controller/userController.js";
import secureRoute from "../middleware/secureRoute.js";

const router = express.Router();

router.post("/signup", signup);
router.post("/login", login);
router.post("/logout", logout);
router.get("/getAllUser", secureRoute, getAllUser);

export default router;