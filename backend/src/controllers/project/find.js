import { FindProjectService } from "../../services/project/index.js";
import { ProjectRepositoryFactory } from "../../infra/factories/project-factory-repositories.js";
import { TaskRepositoryFactory } from "../../infra/factories/task-factory-repositories.js";
class ListAllProjectController {
  async execute(request, response) {
    const { project_id } = request.params;
    try {
      const findProjectService = new FindProjectService(
        ProjectRepositoryFactory.getInstance(),
        TaskRepositoryFactory.getInstance()
      );
      const project = await findProjectService.execute(project_id);
      return response.json(project);
    } catch (error) {
      console.log(error);
      return response.status(500).send("Internal Server Error");
    }
  }
}

export default new ListAllProjectController();
