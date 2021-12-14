const router = require('express').Router({ mergeParams: true });
const custom_middleware = require("./middlware");
const schemas = require('./validation')
const functions = require('./utils')
const valdationStrategy = (req,res,next) => {
const schema = req.params.type === "Fedex" ? schemas.FedexBody: schemas.UpsBody; 
if (req.params.type !== "Fedex" && req.params.type !== "Ups")
return res.status(422).json({ error :"Shipment Type is not valid"});
const validationmiddleware =  custom_middleware(schema);
validationmiddleware(req,res,next)
};
router.route('/All').get(functions.getShipments)
router.route('/:type')
.post(valdationStrategy,functions.postShipment)




module.exports=router