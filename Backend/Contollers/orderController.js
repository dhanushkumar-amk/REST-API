const orderModel = require('../models/ordermodel');
const productModel = require('../models/productModel.js');

orderModel;

exports.createOrder = async (req, res, next) => {
  // console.log(req.body, "Data");

  const cartItems = req.body;
  const amount = Number(
    cartItems.reduce((prev, item) => prev + item.product.price * item.qty, 0)
  ).toFixed(2);
  const status = 'pending';

  // console.log(amount, "amount");

  const order = await orderModel.create({cartItems, amount, status});

  // updating stock values
//   cartItems.forEach(async(item) => {
//     const product = await productModel.findById(item.product._id);
//     product.stock =  product.stock - item.qty;
//     await product.save();
//   });

  res.json({
    success: true,
    message: 'Order works !',
    order,
  });
};
