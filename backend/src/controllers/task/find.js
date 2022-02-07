import { FindTaskService } from "../../services/task/index.js";
import { TaskRepositoryFactory } from "../../infra/factories/task-factory-repositories.js";
class FindTaskController {
  async execute(request, response) {
    const { task_id } = request.params;
    try {
      const findTaskService = new FindTaskService(
        TaskRepositoryFactory.getInstance()
      );
      const data = await findTaskService.execute(task_id);
      return response.json(data);
    } catch (error) {
      console.log(error);
      return response.status(500).send("Internal Server Error");
    }
  }
}
export default new FindTaskController();
