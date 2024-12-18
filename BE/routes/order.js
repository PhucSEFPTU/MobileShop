// routes/orderRoutes.js
const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const { getAllOrders, createOrder, getOrderByCode } = require('../controllers/orderController');

router.post('/', auth, createOrder);
// Đường dẫn để lấy tất cả các đơn hàng
router.get('/', getAllOrders);

router.get('/:orderCode', getOrderByCode);

module.exports = router;
