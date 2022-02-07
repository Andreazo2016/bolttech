import { FinishTaskService } from "../../services/task/index.js";
import { TaskRepositoryFactory } from "../../infra/factories/task-factory-repositories.js";
class FinishTaskController {
  async execute(request, response) {
    const { task_id } = request.body;
    try {
      const finishTaskService = new FinishTaskService(
        TaskRepositoryFactory.getInstance()
      );
      const data = await finishTaskService.execute(task_id);
      return response.json(data);
    } catch (error) {
      console.log(error);
      return response.status(500).send("Internal Server Error");
    }
  }
}
export default new FinishTaskController();
