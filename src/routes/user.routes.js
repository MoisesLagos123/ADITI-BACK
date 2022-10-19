import { Router } from "express";
import { 
    getAllUser, 
    createUser, 
    deleteUser,
    updateUser,
    getOneUser 
} from "../controllers/user.controller.js";

const router = Router();

router.get("/user", getAllUser);
router.post("/user", createUser);
router.put("/user/:id", updateUser);
router.delete("/user/:id", deleteUser);
router.get("/user/:id", getOneUser);

export default router; 