const Fedex =  Object.freeze({
validId:["fedexAIR","fedexGround"],
Type: "Fedex",
dimensionsUnit :"cm",
weightUnit:"gram"
});
const Ups = Object.freeze({
    validId:[],
    Type: "Ups",
    dimensionsUnit :"inch",
    weightUnit:"pound"
});


module.exports = {Fedex , Ups}