import Joi from 'joi';

const ProductValidation = (req, res, next) => {
  const dataSchema = Joi.object().keys({
    name: Joi.string().min(3).required().error(() => ({
      message: 'Please provide a valid name'
    })),
    price: Joi.number().required().error(() => ({
      message: 'Please provide a valid price'
    })),
    description: Joi.string().min(10).max(250).required()
      .error(() => ({
        message: 'Please provide a valid description'
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
export default ProductValidation;
