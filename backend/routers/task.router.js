import expresss from "express";
import { createTask, deleteTask, getAllTasks, getTaskById, updateTask } from "../controller/task.controller.js";

const router = expresss.Router();

router.get("/get", getAllTasks);
router.get("/get/:id", getTaskById);
router.post("/create", createTask);
router.put("/update/:id", updateTask);
router.delete("/delete/:id", deleteTask);

export default router;

