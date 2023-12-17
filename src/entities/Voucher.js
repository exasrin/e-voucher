const mongoose = require("mongoose");

const voucherSchema = new mongoose.Schema({
  code: { type: String, required: true, unique: true },
  amount: { type: Number, required: true },
});

const Voucher = mongoose.model("Voucher", voucherSchema);

module.exports = Voucher;
