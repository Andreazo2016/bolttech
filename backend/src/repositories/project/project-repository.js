import { Project } from "../../models/index.js";
export class ProjectRepository {
  #projects;
  constructor() {
    this.#projects = [];
  }
  async save({ name, user_id }) {
    this.#projects.push(new Project({ name, user_id }));
  }
  async findById(id) {
    return this.#projects.find((project) => project.id === id);
  }
  async delete(id) {
    this.#projects.filter((project) => project.id !== id);
  }
  async update(id, params) {
    const project = await this.findById(id);
    if (project) {
      await this.delete(id);
      const newProject = { ...project, ...params };
      this.#projects.push(newProject);
    }
  }

  async findAllProjectByUserID(userId) {
    return this.#projects.filter((project) => project.user_id === userId);
  }
}