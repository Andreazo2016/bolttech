export class FindTaskService {
  #taskRepository;
  constructor(taskRepository) {
    this.#taskRepository = taskRepository;
  }

  async execute(taskId) {
    return this.#taskRepository.findById(taskId);
  }
}
