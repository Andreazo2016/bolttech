import { ListTaskService } from "../../services/task/index.js";
import { TaskRepositoryFactory } from "../../infra/factories/task-factory-repositories.js";
class ListTaskController {
  async execute(request, response) {
    try {
      const listTaskService = new ListTaskService(
        TaskRepositoryFactory.getInstance()
      );
      const data = await listTaskService.execute();
      return response.json(data);
    } catch (error) {
      console.log(error);
      return response.status(500).send("Internal Server Error");
    }
  }
}
export default new ListTaskController();
