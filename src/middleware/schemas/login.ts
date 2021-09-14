const loginSchema = Joi => Joi.object().keys(
  {
    email: Joi.string().email().required(),
    password: Joi.string().min(6).alphanum().required(),
  },
);

export default loginSchema;
