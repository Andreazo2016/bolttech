import Joi from "joi";
import formatMessageError from "../util/format-message-error.js";

export default (req, res, next) => {
  const { body } = req;

  const schema = Joi.object().keys({
    description: Joi.string().required(),
    project_id: Joi.string().required(),
  });

  const { error } = schema.validate(body, { abortEarly: false });
  if (error) {
    console.log(error);
    return res.status(400).json(formatMessageError(error));
  }

  return next();
};
