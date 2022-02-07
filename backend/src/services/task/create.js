export class CreateTaskService {
  #taskRepository;
  constructor(taskRepository) {
    this.#taskRepository = taskRepository;
  }

  async execute(description, project_id) {
    return this.#taskRepository.save({
      project_id,
      description,
    });
  }
}
