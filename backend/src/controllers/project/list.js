import { ListAllProjectService } from "../../services/project/index.js";
import { ProjectRepositoryFactory } from "../../infra/factories/project-factory-repositories.js";
class FindProjectController {
  async execute(request, response) {
    const { user_id } = request.params;
    try {
      const listAllProjectService = new ListAllProjectService(
        ProjectRepositoryFactory.getInstance()
      );
      const projects = await listAllProjectService.execute(user_id);
      return response.json(projects);
    } catch (error) {
      console.log(error);
      return response.status(500).send("Internal Server Error");
    }
  }
}

export default new FindProjectController();
