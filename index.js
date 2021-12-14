//We imported express dependecy
const express = require('express');
const app = express();
const Shipment = require('./ShipmentRoute');
var mongoose = require('mongoose');
//Connection String to Monogodb
const dbUri =
  'mongodb+srv://ahmed:123456789A@shipment.d1rgh.mongodb.net/Shipment-Service?retryWrites=true&w=majority';
mongoose
  .connect(dbUri)
  .then(() => console.log('Connected Db'))
  .catch((err) => console.log(err));
//Express.json() is a middleware and its added to pipeline of execution
app.use(express.json());
app.use('/api/shipment', Shipment);
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Now listening on port ${port}`);
});
