import { Router } from "express";
import { getAllModelShoes, createModelShoes } from "../controllers/modelShoes.controller.js";

const router = Router();

router.get("/modelShoes", getAllModelShoes);
router.post("/modelShoes", createModelShoes);
router.put("/modelShoes/:id");
router.delete("/modelShoes/:id");
router.get("/modelShoes/:id");

export default router; 