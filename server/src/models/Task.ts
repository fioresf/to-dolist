import  mongoose from "mongoose";

// Create mongoose schema
const taskSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "Please enter a title"],
  },
  description: {
    type: String,
    required: [true, "Please enter a description"],
  },
  expirationDate: {
    type: Date,
    required: false,
  },
  category: {
    type: String,
    enum: ["Personal", "Trabajo", "Estudios", "Ocio"],
    required: [true, "Please enter a category"],
  },
  state: {
    type: String,
    enum: ["Pendiente", "En progreso", "Completada"],
    default: "Pendiente",
    required: false,
  },
  createdAt: {
    type: Date,
    required: false,
    default: Date.now(),
  },
  updatedAt: {
    type: Date,
    required: false,
    default: Date.now(),
  },
});

// Create mongoose model
export default mongoose.model("Task", taskSchema);