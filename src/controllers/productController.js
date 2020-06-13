import { v4 as uuidv4 } from 'uuid';
import Models from '../database/models';

class userController {
  static async add(req, res) {
    try {
      const { body: { name, price, description }, user: { id } } = req;
      console.log(id);
      const { Products } = Models;
      await Products.create({
        id: uuidv4(),
        name,
        price,
        description,
        createdBy: id
      });
      return res.status(200).json({
        status: 200,
        message: 'A new product have been added'
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
