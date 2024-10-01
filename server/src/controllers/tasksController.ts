import Task from "../models/Task";

//Get all tasks
export const getTasks = async (req, res) => {
  try {
    const tasks = await Task.find();

    res.status(200).json(tasks);
  } catch (error) {
    res.status(500).json({ message: (error as Error).message });
  }
};

//Create a new task
export const createTask = async (req, res) => {
  try {
    const { title, description, expirationDate, category, state } =
      req.body;

      //validar que los campos obligatorios no esten vacios
    if (!title || !description || !category) {
        return res.status(400).json({ message: "Please fill all fields" });
        }

    const newTask = new Task({
      title,
      description,
      expirationDate,
      category,
      state
    });

    const savedTask = await newTask.save();
    res.status(201).json({ message: "Task created sucessfully", savedTask });
  } catch (error) {
    res.status(500).json({ message: (error as Error).message });
  }
};

// Actualizar una tarea
export const updateTask = async (req, res) => {
  try {
    const { id } = req.params;

    const updatedTask = await Task.findByIdAndUpdate(id, req.body, {
      new: true,
    });

    if (!updatedTask) {
      return res.status(404).json({ message: "Task not found" });
    }

    res.status(200).json({ message: "Task updated succesfully", updatedTask });
  } catch (error) {
    res.status(500).json({ message: (error as Error).message });
  }
};

// Eliminar una tarea
export const deleteTask = async (req, res) => {
  try {
    const { id } = req.params;

    const deletedTask = await Task.findByIdAndDelete(id);

    if (!deletedTask) {
      console.log("Task not found");
      return res.status(404).json({ message: "Task not found" });
    }

    res.status(200).json({ message: "Task deleted succesfully" });
  } catch (error) {
    res.status(500).json({ message: (error as Error).message });
  }
};
