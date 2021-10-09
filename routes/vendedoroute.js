let express=require("express");
let modeloVendedor=require("../models/vendedor")//se importa el archivo que tiene el modelo
let modeloVendedor2=require("../models/vendedorjuridico")
let Servicios=require("../models/Servicios")
let Ventas=require("../models/ventas")
let usuarios=require("../models/Users")
let vendedoroute=express.Router();

vendedoroute.route("/vendedor").get((req,res)=>res.send("Hola Vendedor"));
//-----------------------------modeloVendedor------------------------
//buscar por todos los vendedoresNaturales
vendedoroute.route("/vendedorConsulta").get((req,res)=>{
    modeloVendedor.find((error,data)=>res.json(data)); 

});
//encontrar por id
vendedoroute.route("/buscavendedor/:id").get((req,res)=>{
    modeloVendedor.findById(req.params.id,(error,data)=>res.json(data)); 

});
vendedoroute.route("/buscavendedornombre/:nombre").get((req,res)=>{
    modeloVendedor.find({nombre:req.params.nombre},(error,data)=>res.json(data)); 

});
//crear
vendedoroute.route("/creacionVendedor").post((req,res)=>{ //Para crear un nuevo vendedor
    modeloVendedor.create(req.body,(error,data)=>res.json(data)); 

});
//borrar
vendedoroute.route("/borrarVendedorN/:id").delete((req,res)=>{ //Para borrar un nuevo vendedor
    modeloVendedor.findByIdAndDelete(req.params.id,(error,data)=>res.json(data)); 

});
//actualizar
vendedoroute.route("/actualizarVendedorN/:id").put((req,res)=>{ //Para actualizar un nuevo vendedor
    modeloVendedor.findByIdAndUpdate(req.params.id,{$set:req.body},(error,data)=>res.json(data)); 

});
//-------------------------modeloVendedor2-------------------------------------
//consultar
vendedoroute.route("/vendedorJuridicoConsulta").get((req,res)=>{
    modeloVendedor2.find((error,data)=>res.json(data)); 
});
vendedoroute.route("/buscavendedornombrejuridico/:nombre").get((req,res)=>{
    modeloVendedor2.find({nombre:req.params.nombre},(error,data)=>res.json(data)); 

});
vendedoroute.route("/buscavendedorJuridico/:id").get((req,res)=>{
    modeloVendedor2.findById(req.params.id,(error,data)=>res.json(data)); 
});
//crear
vendedoroute.route("/creacionVendedorjuridico").post((req,res)=>{ //Para crear un nuevo vendedor
    modeloVendedor2.create(req.body,(error,data)=>res.json(data)); 

});
//borrar
vendedoroute.route("/borrarvendedorJ/:id").delete((req,res)=>{ //Para crear un nuevo vendedor
    modeloVendedor2.findByIdAndDelete(req.params.id,(error,data)=>res.json(data)); 

});
//actualizar
vendedoroute.route("/actualizarVendedorJ/:id").put((req,res)=>{ //Para actualizar un nuevo vendedor
    modeloVendedor2.findByIdAndUpdate(req.params.id,{$set:req.body},(error,data)=>res.json(data)); 

});
//---------------------------Servicios--------------------
// consultar
vendedoroute.route("/consultarservicios").get((req,res)=>{
    Servicios.find((error,data)=>res.json(data)); 

});
vendedoroute.route("/buscaservicios/:Tipo_servicio").get((req,res)=>{
    Servicios.find({Tipo_servicio:req.params.Tipo_servicio},(error,data)=>res.json(data)); 

});
vendedoroute.route("/buscarservicios/:id").get((req,res)=>{
    Servicios.findById(req.params.id,(error,data)=>res.json(data)); 
});
//crear
vendedoroute.route("/creacionservicios").post((req,res)=>{ //Para crear un nuevo vendedor
    Servicios.create(req.body,(error,data)=>res.json(data)); 

});
//borrar
vendedoroute.route("/borrarservicios/:id").delete((req,res)=>{ //Para crear un nuevo vendedor
    Servicios.findByIdAndDelete(req.params.id,(error,data)=>res.json(data)); 

});
//actualizar
vendedoroute.route("/actualizarServicios/:id").put((req,res)=>{ //Para actualizar un nuevo vendedor
    Servicios.findByIdAndUpdate(req.params.id,{$set:req.body},(error,data)=>res.json(data)); 

});
//-----------------------Ventas--------------
// consultar
vendedoroute.route("/consultarventas").get((req,res)=>{
    Ventas.find((error,data)=>res.json(data)); 

});
vendedoroute.route("/buscaventas/:nombre").get((req,res)=>{
    Ventas.find({nombre:req.params.nombre},(error,data)=>res.json(data)); 

});
vendedoroute.route("/buscarventas/:id").get((req,res)=>{
    Ventas.findById(req.params.id,(error,data)=>res.json(data)); 
});
//crear
vendedoroute.route("/creacionventas").post((req,res)=>{ //Para crear un nuevo vendedor
    Ventas.create(req.body,(error,data)=>res.json(data)); 

});
//borrar
vendedoroute.route("/borrarventas/:id").delete((req,res)=>{ //Para crear un nuevo vendedor
    Ventas.findByIdAndDelete(req.params.id,(error,data)=>res.json(data)); 

});
//actualizar
vendedoroute.route("/actualizarVentas/:id").put((req,res)=>{ //Para actualizar un nuevo vendedor
    Ventas.findByIdAndUpdate(req.params.id,{$set:req.body},(error,data)=>res.json(data)); 

});
//--------------------usuarios-----
vendedoroute.route("/consultarusuarios").get((req,res)=>{
    usuarios.find((error,data)=>res.json(data)); 

});
vendedoroute.route("/buscausuarios/:username").get((req,res)=>{
    usuarios.find({username:req.params.username},(error,data)=>res.json(data)); 

});
vendedoroute.route("/buscarusuarios/:id").get((req,res)=>{
    usuarios.findById(req.params.id,(error,data)=>res.json(data)); 
});
//crear
vendedoroute.route("/creacionusuario").post((req,res)=>{ //Para crear un nuevo vendedor
    usuarios.create(req.body,(error,data)=>res.json(data)); 

});
//borrar
vendedoroute.route("/borrarusuarios/:id").delete((req,res)=>{ //Para crear un nuevo vendedor
    usuarios.findByIdAndDelete(req.params.id,(error,data)=>res.json(data)); 
});
//actualizar
vendedoroute.route("/actualizarUsuarios/:id").put((req,res)=>{ //Para actualizar un nuevo vendedor
    usuarios.findByIdAndUpdate(req.params.id,{$set:req.body},(error,data)=>res.json(data)); 

});
module.exports=vendedoroute;