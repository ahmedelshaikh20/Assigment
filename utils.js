const Shipment = require('./models/Shipment');
const postShipment =async (req , res) => {
    try{
    await new Shipment(
        {
            serviceType: req.params.type, serviceId: req.body.serviceID, 
            packageDimensions :{width : req.body.width ,height : req.body.height , length : req.body.length ,unit:req.body.unit},
            packageWeight:{weight:req.body.weight , unit : req.body.unit
        }}).save();
        res.status(200).send(`Shipment to ${req.body.type} completed successfully!`);

}
catch(err){
res.status(400).send(err);
}
} 

const getShipments = async (req, res)=>{
    try {    
    let shipments = await Shipment.find();
    if(shipments)
    res.json({status: 'success', data: { shipments: shipments }})
    else res.json({status: 'success', data: "There are no shipments records."})
    }catch (err){
        res.status(400).send('Try Again Later');}
    }



module.exports ={postShipment , getShipments};