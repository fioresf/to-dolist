import mongoose from "mongoose";

// Cadena de conexion
 export const connectdb = async () => {
  try {
    await mongoose.connect("mongodb://localhost:27017/to-doList");
    console.log("<< MongoDB database connected successfully >>");
  } catch (error) {
    console.error("Error connecting to database");
  }
}

