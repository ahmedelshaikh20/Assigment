const router = require('express').Router();
const Shipment = require('./models/Shipment');
const schemas =require('./validation')
const custom_middleware = require("./middlware");
const functions = require('./utils')

router.route('/').get(functions.getShipments)
router.route('/:type')
.post( custom_middleware(),functions.postShipment)




module.exports=router