let express=require("express");
let modeloVendedor=require("../models/vendedor")//se importa el archivo que tiene el modelo
let modeloVendedor2=require("../models/vendedorjuridico")
let vendedoroute=express.Router();

vendedoroute.route("/vendedor").get((req,res)=>res.send("Hola Vendedor"));
//buscar por todos los vendedores
vendedoroute.route("/vendedorConsulta").get((req,res)=>{
    modeloVendedor.find((error,data)=>res.json(data)); 

});

vendedoroute.route("/vendedorJuridicoConsulta").get((req,res)=>{
    modeloVendedor2.find((error,data)=>res.json(data)); 
});
//encontrar por id
vendedoroute.route("/buscavendedor/:id").get((req,res)=>{
    modeloVendedor.findById(req.params.id,(error,data)=>res.json(data)); 

});
vendedoroute.route("/buscavendedornombre/:nombre").get((req,res)=>{
    modeloVendedor.findOne({nombre:req.params.nombre},(error,data)=>res.json(data)); 

});
vendedoroute.route("/buscavendedornombre/:nombre").get((req,res)=>{
    modeloVendedor2.findOne({nombre:req.params.nombre},(error,data)=>res.json(data)); 

});
vendedoroute.route("/buscavendedorJuridico/:id").get((req,res)=>{
    modeloVendedor2.findById(req.params.id,(error,data)=>res.json(data)); 
});
//crear vendedor
vendedoroute.route("/creacionVendedor").post((req,res)=>{ //Para crear un nuevo vendedor
    modeloVendedor.create(req.body,(error,data)=>res.json(data)); 

});

vendedoroute.route("/creacionVendedorjuridico").post((req,res)=>{ //Para crear un nuevo vendedor
    modeloVendedor2.create(req.body,(error,data)=>res.json(data)); 

});
// Borrar vendedor
vendedoroute.route("/borrarVendedorN/:id").delete((req,res)=>{ //Para borrar un nuevo vendedor
    modeloVendedor.findByIdAndDelete(req.params.id,(error,data)=>res.json(data)); 

});

vendedoroute.route("/borrarvendedorJ/:id").delete((req,res)=>{ //Para crear un nuevo vendedor
    modeloVendedor2.findByIdAndDelete(req.params.id,(error,data)=>res.json(data)); 

});
//actualizar vendedor
vendedoroute.route("/actualizarVendedorN/:id").put((req,res)=>{ //Para actualizar un nuevo vendedor
    modeloVendedor.findByIdAndUpdate(req.params.id,{$set:req.body},(error,data)=>res.json(data)); 

});
vendedoroute.route("/actualizarVendedorJ/:id").put((req,res)=>{ //Para actualizar un nuevo vendedor
    modeloVendedor2.findByIdAndUpdate(req.params.id,{$set:req.body},(error,data)=>res.json(data)); 

});
module.exports=vendedoroute;