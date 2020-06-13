import Joi from 'joi';

const EmailValidation = (req, res, next) => {
  const dataSchema = Joi.object().keys({
    email: Joi.string().email().required().error(() => ({
      message: 'Please provide a valid email'
    })),
    type: Joi.string().valid('admin', 'employee').required().error(() => ({
      message: 'Please provide a valid type (admin or employee)'
    }))
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
export default EmailValidation;
