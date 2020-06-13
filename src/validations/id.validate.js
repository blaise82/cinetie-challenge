import Joi from 'joi';

const validateId = (req, res, next) => {
  const Schemas = Joi.object().keys({
    id: Joi.string().guid().required().error(() => ({
      message: 'An id is not provided'
    })),
  });
  const { error } = Joi.validate(req.query, Schemas);
  if (error) {
    return res.status(400).json({
      status: 400,
      error: error.details[0].message
    });
  }
  next();
};
export default validateId;
