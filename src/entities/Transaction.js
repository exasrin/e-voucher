const mongoose = require("mongoose");

const transactionSchema = new mongoose.Schema({
  voucher: { type: mongoose.Schema.Types.ObjectId, ref: "Voucher" },
  amount: { type: Number, required: true },
  createdAt: { type: Date, default: Date.now },
});

const Transaction = mongoose.model("Transaction", transactionSchema);

module.exports = Transaction;
