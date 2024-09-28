import express from "express";

//Configuracion de express
const app = express();
const morgan = require("morgan");
const cors = require("cors");

// Configuracion de CORS
app.use(cors());

// Middleware
app.use(express.json()); 
app.use(morgan("dev")); // loggear las llamadas al servidor

// Routes

export default app;