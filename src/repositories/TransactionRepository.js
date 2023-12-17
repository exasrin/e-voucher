const Transaction = require("../entities/Transaction");

class TransactionRepository {
  async getAll() {
    return Transaction.find().populate("voucher");
  }

  async getById(id) {
    return Transaction.findById(id).populate("voucher");
  }

  async create(transactionData) {
    return Transaction.create(transactionData);
  }

  async update(id, transactionData) {
    return Transaction.findByIdAndUpdate(id, transactionData, { new: true });
  }

  async delete(id) {
    return Transaction.findByIdAndDelete(id);
  }
}

module.exports = new TransactionRepository();
