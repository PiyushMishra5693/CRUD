const express = require("express");
const mongoose = require("mongoose");
const MONGO_URL = require("./const.js");
const productRoutes= require("./routes/Products.routes.js")
const app = express();

//middleware
app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.get("/",(req,res)=>{
    res.send("Home dir");
})

//routes
app.use("/api/products",productRoutes);


mongoose.connect(MONGO_URL)
.then(()=> {

    console.log("Mongodb Connected")
    app.listen(3000,()=>{
        console.log("Hello Brother");
    })
})
.catch((e)=> console.log(e.message));
