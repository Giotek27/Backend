let mongoose=require("mongoose");
let bodyParser=require("body-parser");
let cors=require("cors");
let express=require("express");
require("dotenv").config();

mongoose.Promise=global.Promise;
mongoose.connect(
    process.env.mongoUrl,
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
app.use((req,res,next)=>{
    res.header("Access-Control-Allow-Origin","*");
    res.header("Access-Control-Allow-Headers","Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods","GET, POST, PUT, DELETE, OPTIONS");
    res.header('Allow','GET, POST, OPTIONS, PUT, DELETE');
    next();
});


const vendorapi=require("./routes/vendedoroute");
app.use("",vendorapi);

const server=app.listen(2704,()=> console.log("Connected on port 2704"));