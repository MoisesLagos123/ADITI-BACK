import { Router } from "express";
import { getDevices, createDevice } from "../controllers/devices.controller.js";

const router = Router();

router.get("/devices", getDevices);
router.post("/devices", createDevice);
router.put("/devices/:id");
router.delete("/devices/:id");
router.get("/devices/:id");

export default router; 