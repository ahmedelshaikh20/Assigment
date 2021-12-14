const mongoose = require('mongoose')
const Schema = mongoose.Schema

const ShipmentSchema  = new Schema({
serviceType:{
        type:String,
        enum:["Fedex" , "Ups"]  
    },
serviceId:{
    type:String,
    enum:["fedexAIR","fedexGround","UPSExpress","UPS2DAY"]
},
packageDimensions:{
width:{
type:Number,
required:true
},
height:{
    type:Number,
    required :true
},
length:{
    type:Number,
    required:true
},
unit:{type:String,required:true}
},
packageWeight:{
    weight:{type : Number,required:true
    },
    unit:{type:String , required:true}
}
}, {timestamps:true})

const Shipment = mongoose.model('Shipment' , ShipmentSchema)
module.exports = Shipment;
