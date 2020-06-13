import { decode } from '../helpers/JWTOKEN';
import Models from '../database/models';

const { Users } = Models;
const checkLogin = async (req, res, next) => {
  const Token = req.headers['x-access-token'];
  if (!Token) {
    return res.status(403).json({
      status: 403,
      error: 'Please login'
    });
  }
  const payload = decode(Token);
  const { email } = payload;
  const user = await Users.findOne({ where: { email } });
  if (!user) {
    return res.status(403).json({
      status: 403,
      error: 'User with that email is not found'
    });
  }
  req.user = user;
  next();
};
export default checkLogin;
