export class DeleteProjectService {
  #projectRepository;
  #taskRepository;
  constructor(projectRepository, taskRepository) {
    this.#projectRepository = projectRepository;
    this.#taskRepository = taskRepository;
  }
  async execute(projectId) {
    await this.#projectRepository.delete(projectId);
    await this.#taskRepository.removeAllTaskByProjectID(projectId);
  }
}
