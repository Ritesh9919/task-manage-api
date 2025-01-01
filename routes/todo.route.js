import express from "express";
import {
  createTask,
  getAllTasks,
  getTask,
  updateTask,
  deleteTask,
} from "../controllers/todo.controller.js";
const router = express.Router();
import verifyJWT from "../middlewares/auth.middleware.js";

router.post("/", verifyJWT, createTask);
router.get("/", getAllTasks);
router.get("/:taskId", getTask);
router.put("/:taskId", verifyJWT, updateTask);
router.delete("/:taskId", verifyJWT, deleteTask);

export default router;
