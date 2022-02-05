import { Task } from "../../models/index.js";
export class TaskRepository {
  #tasks;
  constructor() {
    this.#tasks = [];
  }
  async save({ description, created_at, finished_at, project_id }) {
    this.#tasks.push(
      new Task({ description, created_at, finished_at, project_id })
    );
  }
  async findById(id) {
    return this.#tasks.find((task) => task.id === id);
  }
  async delete(id) {
    this.#tasks.filter((task) => task.id !== id);
  }
  async update(id, params) {
    const task = await this.findById(id);
    if (task) {
      await this.delete(id);
      const newTask = { ...task, ...params };
      this.#tasks.push(newTask);
    }
  }

  async findAllTasksByProjectID(projectId) {
    return this.#tasks.filter((task) => task.project_id === projectId);
  }
}
