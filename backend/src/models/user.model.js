import { randomUUID } from "crypto";
export class User {
  #id;
  #email;
  #name;
  #password;
  constructor(email, name, password) {
    this.#id = randomUUID();
    this.#email = email;
    this.#name = name;
    this.#password = password;
  }
}
