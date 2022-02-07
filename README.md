# BOLTTECH

# Ambiente

- Node.js ^16

# Instalação das dependências do projeto

Usando Yarn

```
$ yarn
```

Usando npm:

```
$ npm install
```

## URL API

Desenvolvimento

```
http://localhost:3000
```

# Uso

Para iniciar aplicação em modo de desenvolvimento

```
$ yarn start:dev
```

Ou

```
$  npm run start:dev
```

## Rotas

| Rota            | HTTP Método |                                 Parâmetros                                 |                 descrição                  |
| :-------------- | :---------: | :------------------------------------------------------------------------: | :----------------------------------------: |
| `/users`        |    POST     | Corpo da requisição em formato json com campo `name`, `email`, `password`  |              Cria um usuário               |
| `/login`        |    POST     |     Corpo da requisição em formato json com campo `email`, `password`      |                Faz o login                 |
| `/projects`     |    POST     |            Corpo da requisição em formato json com campo `name`            |              Criar um projeto              |
| `/projects/:id` |     GET     |                               id do projeto                                |            Visualiza um projeto            |
| `/projects`     |     GET     |                                     -                                      | Lista todos os projetos do usuário logado. |
| `/projects/:id` |   DELETE    |                                     -                                      |  Deleta um projeto e suas tasks associada  |
| `/projects/:id` |     PUT     |                                  `name` -                                  |            Atualiza um projeto.            |
| `/tasks`        |    POST     | Corpo da requisição em formato json com campo `description` e `project_id` |               Criar ums task               |
| `/tasks`        |     GET     |                                     -                                      |            Lista todas as tasks            |
| `/tasks/:id`    |     GET     |                                 id da task                                 |             Visualiza uma task             |
| `/task/:id`     |   DELETE    |                                 id da task                                 |              Deleta uma task               |
| `/tasks/:id`    |     PUT     |                              `description` -                               |             Atualiza uma task.             |
| `/tasks/finish` |    POST     |        Corpo da requisição em formato json com os campos `task_id`         |             Finaliza uma task.             |

### Requisições

- `POST /projects`

Request body:

```json
{
  "name": "teste"
}
```

- `GET /projects`

Response body:

```json
[
  {
    "id": "3a23920c-3f7d-494d-a15d-de7ea6debe29",
    "name": "testando aplicação"
  }
]
```

- `GET /projects/:id`

Request body:

```json
{
  "id": "3a23920c-3f7d-494d-a15d-de7ea6debe29",
  "name": "testando aplicação",
  "tasks": [
    {
      "id": "44c06b56-2335-4e75-be82-a8d7a1a513d8",
      "description": "criando uma task",
      "created_at": "2022-02-06T23:45:30.455Z",
      "status": "open",
      "project_id": "3a23920c-3f7d-494d-a15d-de7ea6debe29"
    }
  ]
}
```

`DELETE /projects/:id`

Request body:

```json
{}
```

- `PUT /projects/:id`

Request body:

```json
{
  "name": "new name"
}
```

- `POST /tasks`

Request body:

```json
{
  "description": "teste",
  "project_id": "3a23920c-3f7d-494d-a15d-de7ea6debe29"
}
```

- `GET /tasks`

Response body:

```json
[
  {
    "id": "3393bf01-5791-44c1-bf7c-a2e396612279",
    "finished_at": "2022-02-07T00:05:15.919Z",
    "created_at": "2022-02-07T00:04:31.519Z",
    "status": "finished",
    "project_id": "3a23920c-3f7d-494d-a15d-de7ea6debe29"
  }
]
```

- `GET /tasks/:id`

Response body:

```json
{
  "id": "3393bf01-5791-44c1-bf7c-a2e396612279",
  "finished_at": "2022-02-07T00:05:15.919Z",
  "created_at": "2022-02-07T00:04:31.519Z",
  "status": "finished",
  "project_id": "3a23920c-3f7d-494d-a15d-de7ea6debe29"
}
```

- `PUT /tasks/:id`

Request body:

```json
{
  "description": "Deploy"
}
```

`DELETE /tasks/:id`

Request body:

```json
{}
```

- `POST /tasks/finish`

Request body:

```json
{
  "task_id": "3a23920c-3f7d-494d-a15d-de7ea6debe29"
}
```

- `POST /users`

Request body:

```json
{
  "name": "Andreazo Silva Souza",
  "email": "andreazo@teste.com",
  "password": "123456"
}
```

- `POST /users`

Request body:

```json
{
  "email": "andreazo@teste.com",
  "password": "123456"
}
```
