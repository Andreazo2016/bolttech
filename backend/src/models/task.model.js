import { uuid } from "uuidv4";
export class Task {
  #id;
  #description;
  #created_at;
  #finished_at;
  #project_id;
  #status; //open or finished
  constructor({ description, created_at, finished_at, project_id }) {
    this.#id = uuid();
    this.#description = description;
    this.#created_at = created_at;
    this.#finished_at = finished_at;
    this.#project_id = project_id;
    this.#status = "open";
  }
}
