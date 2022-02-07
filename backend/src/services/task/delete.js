export class DeleteTaskService {
  #taskRepository;
  constructor(taskRepository) {
    this.#taskRepository = taskRepository;
  }

  async execute(taskId) {
    const task = await this.#taskRepository.findById(taskId);
    if (task.status === "open") {
      await this.#taskRepository.delete(taskId);
    }
  }
}
