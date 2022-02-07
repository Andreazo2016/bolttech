import { DeleteTaskService } from "../../services/task/index.js";
import { TaskRepositoryFactory } from "../../infra/factories/task-factory-repositories.js";
class DeleteTaskController {
  async execute(request, response) {
    try {
      const { task_id } = request.params;
      const deleteTaskService = new DeleteTaskService(
        TaskRepositoryFactory.getInstance()
      );
      await deleteTaskService.execute(task_id);
      return response.status(200).send();
    } catch (error) {
      console.log(error);
      return response.status(500).send("Internal Server Error");
    }
  }
}
export default new DeleteTaskController();
