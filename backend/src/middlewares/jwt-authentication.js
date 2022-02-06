import jwt from "jsonwebtoken";
import jwtConfig from "../config/jwt.js";

export default function jwtAuthentication(request, response, next) {
  const authHeader = request.headers.authorization;

  if (!authHeader) {
    return response.status(401).json({ message: "JWT token is missing" });
  }

  const [, token] = authHeader.split(" ");

  try {
    const decoded = jwt.verify(token, jwtConfig.secret);
    const { id } = decoded;
    request.user = {
      id,
    };

    return next();
  } catch (error) {
    return response.status(401).json({ message: "Ivalided JWT token." });
  }
}
