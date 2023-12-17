const transactionService = require("../services/TransactionService");

class TransactionController {
  async getAllTransactions(req, res) {
    const transactions = await transactionService.getAllTransactions();
    res.json(transactions);
  }

  async getTransactionById(req, res) {
    const transactionId = req.params.id;
    const transaction = await transactionService.getTransactionById(
      transactionId
    );
    res.json(transaction);
  }

  async createTransaction(req, res) {
    const transactionData = req.body;
    const newTransaction = await transactionService.createTransaction(
      transactionData
    );
    res.json(newTransaction);
  }

  async updateTransaction(req, res) {
    const transactionId = req.params.id;
    const transactionData = req.body;
    const updatedTransaction = await transactionService.updateTransaction(
      transactionId,
      transactionData
    );
    res.json(updatedTransaction);
  }

  async deleteTransaction(req, res) {
    const transactionId = req.params.id;
    await transactionService.deleteTransaction(transactionId);
    res.json({ message: "Transaction deleted successfully" });
  }
}

module.exports = new TransactionController();
