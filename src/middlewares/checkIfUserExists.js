import Models from '../database/models';

const { Users } = Models;
const checkIfUserExists = async (req, res, next) => {
  const { email } = req.body;
  const user = await Users.findOne({ where: { email } });
  if (user) {
    return res.status(403).json({
      status: 403,
      error: 'A user with that email already exists'
    });
  }
  next();
};
export default checkIfUserExists;
