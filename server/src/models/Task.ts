import  { Schema, model, Document } from "mongoose";

// Create mongoose schema

interface ITask extends Document {
  title: string;
  description: string;
  expirationDate: Date;
  category: "Personal" | "Trabajo" | "Estudios" | "Ocio";
  state?: "Pendiente" | "En progreso" | "Completada";
}

const taskSchema = new Schema<ITask>({
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
}, {
  timestamps: true,
});

// Create mongoose model
export default model<ITask>("Task", taskSchema);