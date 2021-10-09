const moongose = require("mongoose");
const Schema = moongose.Schema;
const VendedorNaturalSchema=new Schema({
    username:{type: String,required:[true,'El campo es obligatorio']},
    password:String,
    Date:{type:Date,default:Date.now}
});


//Convertir a modelo
module.exports=moongose.model('Usuario',VendedorNaturalSchema);