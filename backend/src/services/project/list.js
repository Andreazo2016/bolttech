export class ListAllProjectService {
  #projectRepository;
  constructor(projectRepository) {
    this.#projectRepository = projectRepository;
  }
  async execute(userId) {
    const projects = await this.#projectRepository.findAllProjectByUserID(
      userId
    );
    console.log(projects[0].name);
    return projects;
  }
}
