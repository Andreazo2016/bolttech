export class UpdateProjectService {
  #projectRepository;
  constructor(projectRepository) {
    this.#projectRepository = projectRepository;
  }
  async execute(projectId, params) {
    return this.#projectRepository.update(projectId, params);
  }
}
