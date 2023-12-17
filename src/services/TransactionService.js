const transactionRepository = require("../repositories/TransactionRepository");

class TransactionService {
  async getAllTransactions() {
    return transactionRepository.getAll();
  }

  async getTransactionById(id) {
    return transactionRepository.getById(id);
  }

  async createTransaction(transactionData) {
    return transactionRepository.create(transactionData);
  }

  async updateTransaction(id, transactionData) {
    return transactionRepository.update(id, transactionData);
  }

  async deleteTransaction(id) {
    return transactionRepository.delete(id);
  }
}

module.exports = new TransactionService();
