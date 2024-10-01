import express from "express";
import cors from "cors";
import morgan from "morgan";
import tasksRoutes from "./routes/tasksRoutes";

//Express config
const app = express();

// CORS Configuration
app.use(cors());

// Middleware
app.use(express.json()); 
app.use(morgan("dev"));

// Routes
app.use("/tasks", tasksRoutes);

export default app;