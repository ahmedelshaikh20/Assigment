const Joi = require("joi");
const schemas =require('./validation')
const middleware = (schema) => {
  return (req, res, next) => {
    if (req.params.type === "Fedex"){
      schema = schemas.FedexBody
    }
    else if (req.params.type ==="Ups"){
      schema = schemas.UpsBody
    }else {
     return res.status(422).json({ error :"Type is not valid"});
    }
    const { error } = schema.validate(req.body);
    //const { error } = Joi.validate(req.body, schema);
    console.log(error)
    const valid = error == null;
    if (valid) {
      next();
    } else {
      const { details } = error;
      const message = details.map((i) => i.message).join(",");
      console.log("error", message);
      res.status(422).json({ error: message });
    }
  };
};



module.exports = middleware;