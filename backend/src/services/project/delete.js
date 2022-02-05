export class DeleteProjectService {
  #projectRepository;
  constructor(projectRepository) {
    this.#projectRepository = projectRepository;
  }
}
