import { Router } from "express";
import { getModelShoes, createModelShoes } from "../controllers/modelShoes.controller.js";

const router = Router();

router.get("/modelShoes", getModelShoes);
router.post("/modelShoes", createModelShoes);
router.put("/modelShoes/:id");
router.delete("/modelShoes/:id");
router.get("/modelShoes/:id");

export default router; 