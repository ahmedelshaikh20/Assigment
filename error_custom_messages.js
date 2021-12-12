const { object } = require('joi')
const {Fedex , Ups} = require('./constants')
const ErrorMessage = (name) =>{

const  typeofErrors= {
    "EmptyString":name +' should be a type of text and not empty',
    "InvalidString" : name + " is not valid,You Should enter valid String",
    "Required" : name +' is required',
    "InvalidUnit":name+' is not valid unit for this shipment service',
    "Notnumber" : name +" isnot valid number , You should enter valid number"
}
return typeofErrors;

}



module.exports = ErrorMessage