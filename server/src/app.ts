import express from "express";
import cors from "cors";
import morgan from "morgan";
import tasksRoutes from "./routes/tasksRoutes";

//Configuracion de express
const app = express();

// Configuracion de CORS
app.use(cors());

// Middleware
app.use(express.json()); 
app.use(morgan("dev")); // loggear las llamadas al servidor

// Routes
app.use("/tasks", tasksRoutes);

export default app;