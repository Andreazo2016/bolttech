export class UserRegisterService {
  #userRepository;
  constructor(userRepository) {
    this.#userRepository = userRepository;
  }
  async execute({ name, email, password }) {
    return this.#userRepository.save({ name, email, password });
  }
}
