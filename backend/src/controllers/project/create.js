import { CreateProjectService } from "../../services/project/index.js";
import { ProjectRepositoryFactory } from "../../infra/factories/project-factory-repositories.js";
class CreateProjectController {
  async execute(request, response) {
    const { id } = request.user;
    const { name } = request.body;
    try {
      const createProjectService = new CreateProjectService(
        ProjectRepositoryFactory.getInstance()
      );
      await createProjectService.execute({ name, user_id: id });
      return response.status(200).send();
    } catch (error) {
      console.log(error);
      return response.status(500).send("Internal Server Error");
    }
  }
}

export default new CreateProjectController();
