import { UpdateProjectService } from "../../services/project/index.js";
import { ProjectRepositoryFactory } from "../../infra/factories/project-factory-repositories.js";
class UpdateProjectController {
  async execute(request, response) {
    const { project_id } = request.params;
    try {
      const updateProjectService = new UpdateProjectService(
        ProjectRepositoryFactory.getInstance()
      );
      const project = await updateProjectService.execute(
        project_id,
        request.body
      );
      return response.json(project);
    } catch (error) {
      console.log(error);
      return response.status(500).send("Internal Server Error");
    }
  }
}

export default new UpdateProjectController();
