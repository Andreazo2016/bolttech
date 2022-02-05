import { uuid } from "uuidv4";
export class User {
  #id;
  #email;
  #name;
  #password;
  constructor({ email, name, password }) {
    this.#id = uuid();
    this.#email = email;
    this.#name = name;
    this.#password = password;
  }
  get id() {
    return this.#id;
  }
  get email() {
    return this.#email;
  }
  get password() {
    return this.#password;
  }
  get name() {
    return this.#name;
  }
}
