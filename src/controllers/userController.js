import bcrypt from 'bcryptjs';
import Models from '../database/models';
import { encode } from '../helpers/JWTOKEN';

class userController {
  static async login(req, res) {
    try {
      const { email, password } = req.body;
      const { Users } = Models;
      const registered = await Users.findOne({
        where: {
          email
        }
      });

      if (!registered) {
        return res.status(401).json({
          status: 401,
          error: 'incorrect email or password provided'
        });
      }
      const truePassword = await bcrypt.compareSync(password, registered.password);

      if (!truePassword) {
        return res.status(401).json({
          status: 401,
          error: 'incorrect email or password provided'
        });
      }
      const token = encode({
        email
      });
      return res.status(200).json({
        status: 200,
        message: 'You have been logged in successfully',
        token
      });
    } catch (error) {
      console.log(error);
      return res.status(500).json({
        status: 500,
        error: error.message
      });
    }
  }
}

export default userController;
