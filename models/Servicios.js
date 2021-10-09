const moongose = require("mongoose");
const Schema = moongose.Schema;
const VendedorNaturalSchema=new Schema({
    Tipo_servicio:{type:String,required:[true,'El campo es obligatorio']},
    Tipo_plastic:{type:String,required:[true,'El campo es obligatorio']},
    cantidad_plastic:{type:Number,required:[true,'El campo es obligatorio']},
    Date:{type:Date,default:Date.now}
});


//Convertir a modelo
module.exports=moongose.model('servicio',VendedorNaturalSchema);
