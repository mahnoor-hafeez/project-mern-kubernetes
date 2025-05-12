import express from 'express';
import {
  createOrder,
  getOrderById,
  updateOrderToPaid,
  updateOrderToDelivered,
  getOrders,
} from '../controllers/orderController.js';

const router = express.Router();

// Get all orders
router.get('/', getOrders);

// Create new order
router.post('/', createOrder);

// Get order by ID
router.get('/:id', getOrderById);

// Update order to paid
router.put('/:id/pay', updateOrderToPaid);

// Update order to delivered
router.put('/:id/deliver', updateOrderToDelivered);

export default router;