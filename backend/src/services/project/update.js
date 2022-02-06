export class UpdateProjectService {
  #projectRepository;
  constructor(projectRepository) {
    this.#projectRepository = projectRepository;
  }
  async execute(projectId, params) {
    console.log("projectId", projectId);
    console.log("params", params);
    return this.#projectRepository.update(projectId, params);
  }
}
