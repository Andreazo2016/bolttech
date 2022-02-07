import { UpdateTaskService } from "../../services/task/index.js";
import { TaskRepositoryFactory } from "../../infra/factories/task-factory-repositories.js";
class UpdateTaskController {
  async execute(request, response) {
    const { task_id } = request.params;
    try {
      const updateTaskService = new UpdateTaskService(
        TaskRepositoryFactory.getInstance()
      );
      const data = await updateTaskService.execute(task_id, request.body);
      return response.json(data);
    } catch (error) {
      console.log(error);
      return response.status(500).send("Internal Server Error");
    }
  }
}
export default new UpdateTaskController();
