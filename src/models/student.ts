import mongoose, { Schema, Document } from "mongoose";

export interface IStudent extends Document {
  name: string;
  age: number;
  grade: string;
}

const studentSchema: Schema = new Schema({
  name: { type: String, required: true },
  age: { type: Number, required: true },
  grade: { type: String, required: true },
});

export const Student = mongoose.model<IStudent>("Student", studentSchema);
