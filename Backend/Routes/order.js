
const express = require('express');
const { createOrder } = require('../Contollers/orderController');
const router = express.Router();


router.route('/order').post(createOrder);

module.exports = router;