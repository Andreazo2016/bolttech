import { User } from "../../models/index.js";
export class UserRepository {
  #users = [];
  async save({ name, email, password }) {
    const user = new User({ name, email, password });
    this.#users.push(user);
  }
  async findAll() {
    return this.#users;
  }
  async findById(id) {
    return this.#users.find((user) => user.id === id);
  }
  async findByEmail(email) {
    return this.#users.find((user) => {
      return user.email === email;
    });
  }
  async delete(id) {
    this.#users.filter((user) => user.id !== id);
  }
  async update(id, params) {
    const user = await this.findById(id);
    if (user) {
      await this.delete(id);
      const newUser = { ...user, ...params };
      this.#users.push(newUser);
    }
  }
}
