const Shipment = require('./models/Shipment');
const postShipment = async (req, res) => {
  try {
    await new Shipment({
      serviceId: req.body.serviceId,
      serviceType: req.params.type,
      packageDimensions: {
        width: req.body.packageDimensions.width,
        height: req.body.packageDimensions.height,
        length: req.body.packageDimensions.length,
        unit: req.body.packageDimensions.unit,
      },
      packageWeight: { weight: req.body.packageWeight.weight, unit: req.body.packageWeight.unit },
    }).save();
    console.log('lol');
    res.status(200).send(`Shipment to ${req.params.type} has been completed successfully!`);
  } catch (err) {
    res.status(400).send(err.message);
  }
};

const getShipments = async (req, res) => {
  try {
    let shipments = await Shipment.find();
    if (shipments) res.json({ status: 'success', data: { shipments: shipments } });
    else res.json({ status: 'success', data: 'There are no shipments records.' });
  } catch (err) {
    res.status(400).send('Try Again Later');
  }
};

module.exports = { postShipment, getShipments };
