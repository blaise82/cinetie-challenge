import { v4 as uuidv4 } from 'uuid';
import Models from '../database/models';

class userController {
  static async add(req, res) {
    try {
      const { body: { name, price, description }, user: { id } } = req;
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

  static async getAll(req, res) {
    try {
      const { Products } = Models;
      const AllProducts = await Products.findAll();
      return res.status(200).json({
        status: 200,
        message: 'Add products were retrieved successful',
        data: AllProducts
      });
    } catch (error) {
      return res.status(500).json({
        status: 500,
        error: error.message
      });
    }
  }

  static async delete(req, res) {
    try {
      const { query: { id } } = req;
      const { Products } = Models;
      const found = await Products.findOne({
        where: {
          id,
        }
      });
      if (found) {
        await Products.destroy({
          where: {
            id
          }
        }).then(() => res.status(200).json({
          status: 200,
          message: 'product have been deleted'
        }));
      }
      return res.status(404).json({
        status: 404,
        error: 'Product not found'
      });
    } catch (error) {
      return res.status(500).json({
        status: 500,
        error: error.message
      });
    }
  }

  static async update(req, res) {
    try {
      const { body: { name, price, description }, query: { id } } = req;
      const { Products } = Models;
      const found = await Products.findOne({
        where: {
          id,
        }
      });
      if (found) {
        await Products.update({
          name,
          price,
          description
        }, {
          where: {
            id
          },
          returning: true,
          plain: true
        });
        return res.status(200).json({
          status: 200,
          error: 'Product was update successfully'
        });
      }
      return res.status(404).json({
        status: 404,
        error: 'Product not found'
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
