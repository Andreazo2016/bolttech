import { uuid } from "uuidv4";
export class Task {
  #id;
  #description;
  #created_at;
  #finished_at;
  #project_id;
  #status; //open or finished
  constructor({ description, created_at, project_id }) {
    this.#id = uuid();
    this.#description = description;
    this.#created_at = created_at;
    this.#project_id = project_id;
    this.#status = "open";
    this.toJSON = () => ({
      id: this.#id,
      description: this.#description,
      created_at: this.#created_at,
      status: this.#status,
      project_id: this.#project_id,
    });
  }

  get id() {
    return this.#id;
  }
  get description() {
    return this.#description;
  }
  get created_at() {
    return this.#created_at;
  }
  get project_id() {
    return this.#project_id;
  }
  get status() {
    return this.#status;
  }
  get finished_at() {
    return this.#finished_at;
  }
}
