import { Project } from "../../models/index.js";

export class CreateProjectService {
  #projectRepository;
  constructor(projectRepository) {
    this.#projectRepository = projectRepository;
  }
  async execute({ name, user_id }) {
    return this.#projectRepository.save({ name, user_id });
  }
}
