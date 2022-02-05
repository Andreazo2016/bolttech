import { ProjectRepository } from "../../repositories/project/project-repository.js";
export class ProjectRepositoryFactory {
  static projectRepository = null;
  static getInstance() {
    if (!ProjectRepositoryFactory.projectRepository) {
      ProjectRepositoryFactory.projectRepository = new ProjectRepository();
      return ProjectRepositoryFactory.projectRepository;
    }
    return ProjectRepositoryFactory.projectRepository;
  }
}
