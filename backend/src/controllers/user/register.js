import { UserRegisterService } from "../../services/user/register.js";
import { UserRepositoryFactory } from "../../infra/factories/user-factory-repositories.js";
class RegisterUserController {
  async execute(request, response) {
    const { email, name, password } = request.body;
    try {
      const userRegisterService = new UserRegisterService(
        UserRepositoryFactory.getInstance()
      );
      await userRegisterService.execute({ name, email, password });
      return response.status(200).send();
    } catch (error) {
      console.log(error);
      return response.status(500).send("Internal Server Error");
    }
  }
}

export default new RegisterUserController();
