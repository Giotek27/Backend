let mongoose=require("mongoose");
let bodyParser=require("body-parser");
let cors=require("cors");
let express=require("express");
const port=require("dotenv").config();

mongoose.Promise=global.Promise;
mongoose.connect(
    port,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }

).then(
    ()=>{
        console.log("Conectado a la base de datos"),
        (error)=>console.log(error)
    }
);

const app=express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));
app.use(cors());
const vendorapi=require("./routes/vendedoroute");
app.use("",vendorapi);

const server=app.listen(2704,()=> console.log("Connected on port 2704"));