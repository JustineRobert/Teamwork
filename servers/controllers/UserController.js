import Helpers from '../helpers/Helpers';
import users from '../mock/user';
import { User } from '../models';

const user = new User();

class UserController {
  static async signUp(request, response) {
    const data = request.body;
    data.password = Helpers.hashPassword(request.body.password);
    const checkEmail = await user.getByEmail(data.email);
    if (checkEmail.errors) return Helpers.dbError(response, checkEmail);
    if (checkEmail.count > 0) return Helpers.sendResponse(response, 409, 'Email already exists !');
    const saveUser = await user.create(data);
    if (saveUser.errors) return Helpers.dbError(response, saveUser);
    const token = Helpers.generateToken(saveUser.rows[0].id);
    return Helpers.sendResponse(response, 201, 'User created successfully', { token });
  }

  static async signIn(request, response) {
    const { email, password } = request.body;
    const _user = await user.getByEmail(email);
    Helpers.dbError(response, _user);
    if (_user.count > 0 && Helpers.comparePassword(_user.row.password, password)) {
      const token = Helpers.generateToken(_user.row.id);
      return Helpers.sendResponse(response, 200, 'User is successfully logged in', { token });
    }
    return Helpers.sendResponse(response, 400, 'Invalid credentials');
  }
}

export default UserController;