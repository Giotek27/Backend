const moongose = require("mongoose");
const Schema = moongose.Schema;


const VendedorJuridicoSchema=new Schema({
    nombre:{type:String,required:[true,'El campo es obligatorio']},
    Nit:{type:Number,required:[true,'El campo es obligatorio']},
    correo: {type: String,required:[true,'El campo es obligatorio']},
    telefono:{type:Number,required:[true,'El campo es obligatorio']},
    direccion:{type:String,required:[true,'El campo es obligatorio']},
    ciudad:{type:String,required:[true,'El campo es obligatorio']},
    Tipo_plastic:{type:String,required:[true,'El campo es obligatorio']},
    cantidad_plastic:{type:Number,required:[true,'El campo es obligatorio']},
    estado_plastic:{type:String,required:[true,'El campo es obligatorio']},
    Date:{type:Date,default:Date.now}
});

module.exports=moongose.model('VendedoresJuridico',VendedorJuridicoSchema);