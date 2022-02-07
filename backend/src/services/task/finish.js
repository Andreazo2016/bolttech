export class FinishTaskService {
  #taskRepository;
  constructor(taskRepository) {
    this.#taskRepository = taskRepository;
  }

  async execute(taskId) {
    return this.#taskRepository.update(taskId, {
      status: "finished",
      finished_at: new Date(),
    });
  }
}
