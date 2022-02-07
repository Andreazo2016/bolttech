export class UpdateTaskService {
  #taskRepository;
  constructor(taskRepository) {
    this.#taskRepository = taskRepository;
  }

  async execute(taskId, params) {
    const task = await this.#taskRepository.findById(taskId);
    if (task === "open") {
      return this.#taskRepository.update(taskId, params);
    }
  }
}
