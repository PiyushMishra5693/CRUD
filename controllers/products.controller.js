const Product = require("../models/Products.model")


const createProduct = async(req,res)=>{
    try{
        const product= await Product.create(req.body);
        res.status(200).json(product);
     }
     catch(e){
         res.status(500).json({message:e.message});
     }

}

const getProduct = async (req,res)=>{

    try{
        const {id}= req.params;
        const product = await Product.findById(id);
        if(!product){
            res.status(404).json({message:"Error 404"});
        }
        else{
            res.status(200).json(product)
        }
        
       
    }
    catch(e){
        res.status(500).json({message:e.message});
    }
}

const getAllProducts = async(req,res)=>{
    try{
        const product= await Product.find({});
        res.status(200).json(product);
        console.log(Object.keys(product).length);
     }
     catch(e){
         res.status(500).json({message:e.message});
     }
}

const UpdateProducts = async (req,res)=>{

    
    try{
        const {id}= req.params;
        const product = await Product.findByIdAndUpdate(id,req.body,{new:true});
        
        if(!product){
            res.status(404).json({message:"Product Not Found"});
        }

        res.status(200).json(product);
       
    }
    catch(e){
        res.status(500).json({message:e.message});
    }
    
}

const deleteProducts = async(req,res)=>{
    try{
        const {id}= req.params;
        const product = await Product.findByIdAndDelete(id);
        
        if(!product){
            res.status(404).json({message:"Product Not Found"});
        }

        res.status(200).json({message:"Product Deleted Sucessfully"});
       
    }
    catch(e){
        res.status(500).json({message:e.message});
    }
}


module.exports ={
    getAllProducts,
    getProduct,
    createProduct,
    UpdateProducts,
    deleteProducts
}