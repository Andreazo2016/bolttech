class RegisterUserController {
  async execute(request, response) {
    const { email, name, password } = request.body;
    return response.json({ message: "registered" });
  }
}

export default new RegisterUserController();
