import { Project } from "../../models/index.js";
export class ProjectRepository {
  #projects = [];
  async save({ name, user_id }) {
    const project = new Project({ name, user_id });
    this.#projects.push(project);
  }
  async findById(id) {
    return this.#projects.find((project) => project.id === id);
  }
  async findAll() {
    return this.#projects;
  }
  async delete(id) {
    this.#projects = this.#projects.filter((project) => project.id !== id);
  }
  async update(id, params) {
    const project = await this.findById(id);
    if (project) {
      await this.delete(id);
      const newProject = { id: project.id, ...params };
      this.#projects.push(newProject);
      return this.findById(id);
    }
  }

  async findAllProjectByUserID(userId) {
    return this.#projects.filter((project) => project.user_id === userId);
  }
}
