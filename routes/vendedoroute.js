let express=require("express");
let modeloVendedor=require("../models/vendedor")//se importa el archivo que tiene el modelo
let modeloVendedor2=require("../models/vendedorjuridico")
let modeloVendedor3=require("../models/Servicios")
let modeloVendedor4=require("../models/ventas")
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
//---------------------------modeloVendedor3--------------------
// consultar
vendedoroute.route("/consultarservicios").get((req,res)=>{
    modeloVendedor3.find((error,data)=>res.json(data)); 

});
vendedoroute.route("/buscaservicios/:nombre").get((req,res)=>{
    modeloVendedor3.find({nombre:req.params.nombre},(error,data)=>res.json(data)); 

});
vendedoroute.route("/buscaservicios/:id").get((req,res)=>{
    modeloVendedor3.findById(req.params.id,(error,data)=>res.json(data)); 
});
//crear
vendedoroute.route("/creacionservicios").post((req,res)=>{ //Para crear un nuevo vendedor
    modeloVendedor3.create(req.body,(error,data)=>res.json(data)); 

});
//borrar
vendedoroute.route("/borrarservicios/:id").delete((req,res)=>{ //Para crear un nuevo vendedor
    modeloVendedor3.findByIdAndDelete(req.params.id,(error,data)=>res.json(data)); 

});
//actualizar
vendedoroute.route("/actualizarServicios/:id").put((req,res)=>{ //Para actualizar un nuevo vendedor
    modeloVendedor3.findByIdAndUpdate(req.params.id,{$set:req.body},(error,data)=>res.json(data)); 

});
//-----------------------ModeloVendedor4--------------
// consultar
vendedoroute.route("/consultarventas").get((req,res)=>{
    modeloVendedor4.find((error,data)=>res.json(data)); 

});
vendedoroute.route("/buscaventas/:nombre").get((req,res)=>{
    modeloVendedor4.find({nombre:req.params.nombre},(error,data)=>res.json(data)); 

});
vendedoroute.route("/buscaventas/:id").get((req,res)=>{
    modeloVendedor4.findById(req.params.id,(error,data)=>res.json(data)); 
});
//crear
vendedoroute.route("/creacionventas").post((req,res)=>{ //Para crear un nuevo vendedor
    modeloVendedor4.create(req.body,(error,data)=>res.json(data)); 

});
//borrar
vendedoroute.route("/borrarventas/:id").delete((req,res)=>{ //Para crear un nuevo vendedor
    modeloVendedor4.findByIdAndDelete(req.params.id,(error,data)=>res.json(data)); 

});
//actualizar
vendedoroute.route("/actualizarVentas/:id").put((req,res)=>{ //Para actualizar un nuevo vendedor
    modeloVendedor4.findByIdAndUpdate(req.params.id,{$set:req.body},(error,data)=>res.json(data)); 

});

module.exports=vendedoroute;