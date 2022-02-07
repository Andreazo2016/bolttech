import { CreateTaskService } from "../../services/task/index.js";
import { TaskRepositoryFactory } from "../../infra/factories/task-factory-repositories.js";
class CreateTaskController {
  async execute(request, response) {
    const { description, project_id } = request.body;
    try {
      const createTaskService = new CreateTaskService(
        TaskRepositoryFactory.getInstance()
      );
      await createTaskService.execute(description, project_id);
      return response.status(201).send();
    } catch (error) {
      console.log(error);
      return response.status(500).send("Internal Server Error");
    }
  }
}
export default new CreateTaskController();
