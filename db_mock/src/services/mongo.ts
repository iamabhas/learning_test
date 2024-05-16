import mongoose, { ConnectOptions } from "mongoose";
import { Project, ProjectInterface } from "../models/Project";

export async function connectDb(mongoUrl: string) {
  return await mongoose.connect(mongoUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  } as ConnectOptions);
}

export async function addNewProject(project: Partial<ProjectInterface>) {
  const newProject = new Project({
    name: project.name,
    desc: project.desc,
  });
  return await newProject.save();
}

export async function getAllProjects() {
  return await Project.find();
}
