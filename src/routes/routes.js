const express = require('express');
const voucherController = require('../controllers/VoucherController');
const transactionController = require('../controllers/TransactionController');

const router = express.Router();

// Voucher Routes
router.get('/vouchers', voucherController.getAllVouchers);
router.get('/vouchers/:id', voucherController.getVoucherById);
router.post('/vouchers', voucherController.createVoucher);
router.put('/vouchers/:id', voucherController.updateVoucher);
router.delete('/vouchers/:id', voucherController.deleteVoucher);

// Transaction Routes
router.get('/transactions', transactionController.getAllTransactions);
router.get('/transactions/:id', transactionController.getTransactionById);
router.post('/transactions', transactionController.createTransaction);
router.put('/transactions/:id', transactionController.updateTransaction);
router.delete('/transactions/:id', transactionController.deleteTransaction);

module.exports = router;
