import { Router } from "express";
import { singUp, singIn } from "../controllers/auth.controller.js";

const router = Router();

router.post('/singUp', singUp);
router.post('/singIn', singIn);

export default router;

