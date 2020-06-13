import bcrypt from 'bcryptjs';
import generator from 'generate-password';
import { v4 as uuidv4 } from 'uuid';
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
      return res.status(500).json({
        status: 500,
        error: error.message
      });
    }
  }

  static async register(req, res) {
    try {
      const { email } = req.body;
      const password = generator.generate({
        length: 10,
        numbers: true
      });

      const hash = await bcrypt.hash(password, 10);
      const newUser = await Models.Users.create({
        id: uuidv4(),
        type: 'admin',
        email,
        password: hash,
        isVerified: false,
        isUpdated: false
      });

      // const sendEmail = {
      //   email
      //   password
      // };

      // sendVerificationEmail(verificationData);

      return res.status(201).json({
        status: 201,
        message: 'A new user have been registered',
        data: {
          email,
          password
        }
      });
    } catch (error) {
      return res.status(500).json({
        status: 500,
        error: error.message
      });
    }
  }
}

export default userController;
