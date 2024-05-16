import mongoose, { Model, Schema, mongo } from "mongoose";

export interface ProjectInterface extends Document {
  name: string;
  desc: string;
}

export const ProjectSchema = new Schema({
  name: "string",
  desc: "string",
});

export const Project: Model<ProjectInterface> =
  mongoose.model<ProjectInterface>("Project", ProjectSchema);
