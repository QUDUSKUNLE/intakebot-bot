const registerSchema = Joi => Joi.object().keys(
  {
    email: Joi.string().email().required(),
    firstName: Joi.string().min(4).required(),
    lastName: Joi.string().min(4).required(),
    phone: Joi.string().min(11).max(11).required(),
    company: Joi.string().alphanum().required(),
  },
);

export default registerSchema;
