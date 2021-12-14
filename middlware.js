const Joi = require('joi');
const schemas = require('./validation');
const middleware = (schema) => {
  return (req, res, next) => {
    const { error } = schema.validate(req.body);
    //const { error } = Joi.validate(req.body, schema);
    const valid = error == null;
    if (valid) {
      next();
    } else {
      const { details } = error;
      const message = details.map((i) => i.message).join(',');
      console.log('error', message);
      res.status(422).json({ Status: 'Faild to create shipment', error: message });
    }
  };
};

module.exports = middleware;
