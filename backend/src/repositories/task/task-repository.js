import { Task } from "../../models/index.js";
export class TaskRepository {
  #tasks = [];
  async save({ description, project_id }) {
    this.#tasks.push(
      new Task({ description, created_at: new Date(), project_id })
    );
  }
  async findById(id) {
    return this.#tasks.find((task) => task.id === id);
  }
  async delete(id) {
    this.#tasks = this.#tasks.filter((task) => task.id !== id);
  }
  async update(id, params) {
    const task = await this.findById(id);
    if (task) {
      await this.delete(id);
      const newTask = {
        id: task.id,
        finished_at: task.finished_at,
        created_at: task.created_at,
        status: task.status,
        project_id: task.project_id,
        ...params,
      };
      this.#tasks.push(newTask);
    }
  }
  async findAll() {
    return this.#tasks;
  }

  async findAllTasksByProjectID(projectId) {
    return this.#tasks.filter((task) => task.project_id === projectId);
  }
  async removeAllTaskByProjectID(projectId) {
    this.#tasks = this.#tasks.filter((task) => task.project_id !== projectId);
  }
}
