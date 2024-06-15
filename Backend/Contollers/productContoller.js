
const productModel = require('../models/productModel')


// get product api api/v1/products
exports.getProducts = async (req,res,next) => {
    
   const products =  await productModel.find({})
    
    res.json({
        success : true,
        // message : "Get products working !"
        products
    })
}

// get single product api api/v1/products /:id

exports.getSingleProducts = async (req,res,next) => {
try {
    const product =  await  productModel.findById(req.params.id);
    res.json({
        success : true,
        // message : "Get single  products working !" 
        product
    })
} catch (error) {
   res.status(404).json({
    success : false,
    message : "unable to get product with that id"
   }) 
}

}