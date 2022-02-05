import { uuid } from "uuidv4";
export class Project {
  #id;
  #name;
  #user_id;
  constructor({ name, user_id }) {
    this.#id = uuid();
    this.#name = name;
    this.#user_id = user_id;
  }
}
