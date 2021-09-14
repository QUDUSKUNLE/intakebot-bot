
const user = Joi => Joi.object().keys(
  {
    id: Joi.string().min(24).max(24).alphanum().required(),
  },
);

export default user;
