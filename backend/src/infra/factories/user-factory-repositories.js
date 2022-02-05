import { UserRepository } from "../../repositories/user/user-repository.js";
export class UserRepositoryFactory {
  static userRepository = null;
  static getInstance() {
    if (!UserRepositoryFactory.userRepository) {
      UserRepositoryFactory.userRepository = new UserRepository();
      return UserRepositoryFactory.userRepository;
    }
    return UserRepositoryFactory.userRepository;
  }
}
