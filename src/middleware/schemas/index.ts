import register from './register';
import user from './user';
import login from './login';


const schema = {
  login: Joi => login(Joi),
  register: Joi => register(Joi),
  user: Joi => user(Joi),
};

export default schema;
