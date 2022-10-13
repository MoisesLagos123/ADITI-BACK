import { Router } from "express";
import { 
    getAllModelType, 
    createModelType, 
    deleteModelType,
    updateModelType,
    getOneModelType 
} from "../controllers/modelType.controller.js";

const router = Router();

router.get("/ModelType", getAllModelType);
router.post("/ModelType", createModelType);
router.put("/ModelType/:id", updateModelType);
router.delete("/ModelType/:id", deleteModelType);
router.get("/ModelType/:id", getOneModelType);

export default router; 