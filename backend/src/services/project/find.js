export class FindProjectService {
  #projectRepository;
  #taskRepository;
  constructor(projectRepository, taskRepository) {
    this.#projectRepository = projectRepository;
    this.#taskRepository = taskRepository;
  }
  async execute(projectId) {
    const project = await this.#projectRepository.findById(projectId);
    const tasks = await this.#taskRepository.findAllTasksByProjectID(projectId);
    return { id: project.id, name: project.name, tasks };
  }
}
