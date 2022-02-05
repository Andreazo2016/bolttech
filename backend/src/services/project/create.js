import { Project } from "../../models/index.js";

export class CreateProjectService {
  #projectRepository;
  constructor(projectRepository) {
    this.#projectRepository = projectRepository;
  }
  async execute({ name, user_id }) {
    return this.#projectRepository.save(new Project({ name, user_id }));
  }
}
