import { User } from "../models/user.model.js";
import { Todo } from "../models/todo.model.js";

export const createTask = async (req, res) => {
  try {
    const { title, description } = req.body;
    if (!title || !description) {
      return res.status(400).json({ message: "All fields are required" });
    }
    const task = await Todo.create({ title, description, owner: req.user._id });
    return res.status(201).json({ task, message: "Task created successfully" });
  } catch (error) {
    return res.status(500).json({ message: "Internal server error" });
  }
};

export const getAllTasks = async (req, res) => {
  try {
    const tasks = await Todo.find();
    return res
      .status(200)
      .json({ tasks, message: "Tasks fetched successfully" });
  } catch (error) {
    return res.status(500).json({ message: "Internal server error" });
  }
};

export const getTask = async (req, res) => {
  try {
    const { taskId } = req.params;
    const task = await Todo.findById(taskId);
    return res.status(200).json({ task, message: "Task fetched successfully" });
  } catch (error) {
    return res.status(500).json({ message: "Internal server error" });
  }
};

export const updateTask = async (req, res) => {
  try {
    const { taskId } = req.params;
    const { status } = req.body;
    const task = await Todo.findById(taskId);
    if (!task.owner.equals(req.user._id)) {
      return res.status(400).json({ message: "You can not update this task" });
    }

    const updatedTask = await Todo.findByIdAndUpdate(
      taskId,
      { $set: { status } },
      { new: true }
    );
    return res
      .status(200)
      .json({ task: updatedTask, message: "Task updated successfully" });
  } catch (error) {
    return res.status(500).json({ message: "Internal server error" });
  }
};

export const deleteTask = async (req, res) => {
  try {
    const { taskId } = req.params;
    const task = await Todo.findById(taskId);
    if (!task.owner.equals(req.user._id)) {
      return res.status(400).json({ message: "You can not delete this task" });
    }
    await Todo.findByIdAndDelete(taskId);
    return res.status(200).json({ message: "Task deleted successfully" });
  } catch (error) {
    return res.status(500).json({ message: "Internal server error" });
  }
};
