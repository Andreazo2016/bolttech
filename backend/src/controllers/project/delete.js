import { DeleteProjectService } from "../../services/project/index.js";
import { ProjectRepositoryFactory } from "../../infra/factories/project-factory-repositories.js";
import { TaskRepositoryFactory } from "../../infra/factories/task-factory-repositories.js";
class DeleteProjectController {
  async execute(request, response) {
    const { project_id } = request.params;
    try {
      const deleteProjectService = new DeleteProjectService(
        ProjectRepositoryFactory.getInstance(),
        TaskRepositoryFactory.getInstance()
      );
      await deleteProjectService.execute(project_id);
      return response.status(200).send();
    } catch (error) {
      console.log(error);
      return response.status(500).send("Internal Server Error");
    }
  }
}

export default new DeleteProjectController();
