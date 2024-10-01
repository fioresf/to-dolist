import Task from "../models/Task";
import { isValidObjectId } from "mongoose";
import { Request, Response } from "express";

//Get all tasks
export const getTasks = async (req: Request, res: Response) => {
  try {
    const tasks = await Task.find();

    res.status(200).json(tasks);
  } catch (error) {
    res.status(500).json({ message: (error as Error).message });
  }
};

//Create a new task
export const createTask = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { title, description, expirationDate, category, state } = req.body;

    // Validate fields
    if (!title || !description || !category) {
      res.status(400).json({ message: "Please fill all fields" });
      return;
    }

    const newTask = new Task({
      title,
      description,
      expirationDate,
      category,
      state,
    });

    const savedTask = await newTask.save();
    res.status(201).json({ message: "Task created sucessfully", savedTask });
  } catch (error) {
    res.status(500).json({ message: (error as Error).message });
  }
};

// update a task
export const updateTask = async (req: Request, res: Response): Promise<void> => {
  try {
    const { id } = req.params;

    if (!isValidObjectId(id)) {
       res.status(400).json({ message: "Invalid Task ID" });
       return;
    }

    const updatedTask = await Task.findByIdAndUpdate(id, req.body, {
      new: true,
    });

    if (!updatedTask) {
       res.status(404).json({ message: "Task not found" });
      return;
    }

    res.status(200).json({ message: "Task updated succesfully", updatedTask });
  } catch (error) {
    res.status(500).json({ message: (error as Error).message });
  }
};

// Delete a task
export const deleteTask = async (req: Request, res: Response): Promise<void> => {
  try {
    const { id } = req.params;

    if (!isValidObjectId(id)) {
       res.status(400).json({ message: "Invalid Task ID" });
       return;
    }

    const deletedTask = await Task.findByIdAndDelete(id);

    if (!deletedTask) {
      console.log("Task not found");
       res.status(404).json({ message: "Task not found" });
       return;
    }

    res.status(200).json({ message: "Task deleted succesfully" });
  } catch (error) {
    res.status(500).json({ message: (error as Error).message });
  }
};
