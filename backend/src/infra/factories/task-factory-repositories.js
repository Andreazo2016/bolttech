import { TaskRepository } from "../../repositories/task/task-repository.js";
export class TaskRepositoryFactory {
  static taskRepository = null;
  static getInstance() {
    if (!TaskRepositoryFactory.taskRepository) {
      TaskRepositoryFactory.taskRepository = new TaskRepository();
      return TaskRepositoryFactory.taskRepository;
    }
    return TaskRepositoryFactory.taskRepository;
  }
}
