import { Project } from "../../models/project.model.js";

export class ListAllProjectService {
  #projectRepository;
  constructor(projectRepository) {
    this.#projectRepository = projectRepository;
  }
  async execute(userId) {
    const projects = await this.#projectRepository.findAllProjectByUserID(
      userId
    );
    return projects;
  }
}
