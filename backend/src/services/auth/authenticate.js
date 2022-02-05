import jwt from "jsonwebtoken";
import authConfig from "../../config/jwt.js";
export class AuthenticateService {
  #userRepository;
  constructor(userRepository) {
    this.#userRepository = userRepository;
  }
  async execute(email, password) {
    const user = await this.#userRepository.findByEmail(email);
    if (!user) {
      return {
        autenticated: false,
        message: "email or password invalid",
      };
    }

    if (user.password !== password) {
      return {
        autenticated: false,
        message: "email or password invalid",
      };
    }

    return {
      autenticated: true,
      user: {
        id: user.id,
        name: user.name,
      },
      token: jwt.sign({ id: user.id }, authConfig.secret, {
        expiresIn: authConfig.expiresIn,
      }),
    };
  }
}
