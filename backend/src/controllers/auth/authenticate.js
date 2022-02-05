import { AuthenticateService } from "../../services/auth/authenticate.js";
import { UserRepositoryFactory } from "../../infra/factories/user-factory-repositories.js";
class AuthenticateController {
  async execute(request, response) {
    const { email, password } = request.body;
    try {
      const authenticateService = new AuthenticateService(
        UserRepositoryFactory.getInstance()
      );
      const { autenticated, message, user, token } =
        await authenticateService.execute(email, password);

      if (!autenticated) {
        return response.status(401).json({ message });
      }
      return response.status(200).json({ token, user });
    } catch (error) {
      console.log(error);
      return response.status(500).send("Internal Server Error");
    }
  }
}

export default new AuthenticateController();
