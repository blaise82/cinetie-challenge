import Joi from 'joi';

const validation = (req, res, next) => {
  const dataSchema = Joi.object().keys({
    email: Joi.string().email().required().error(() => ({
      message: 'Please provide a valid email'
    })),
    password: Joi.string().required()
      .error(() => ({
        message: 'Please provide a password'
      })),
  });

  const { error } = Joi.validate(req.body, dataSchema);
  if (error) {
    return res.status(400).json({
      status: 400,
      error: error.details[0].message
    });
  }
  return next();
};
export default validation;
