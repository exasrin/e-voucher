const voucherService = require("../services/VoucherService");

class VoucherController {
  async getAllVouchers(req, res) {
    const vouchers = await voucherService.getAllVouchers();
    res.json(vouchers);
  }

  async getVoucherById(req, res) {
    const voucherId = req.params.id;
    const voucher = await voucherService.getVoucherById(voucherId);
    res.json(voucher);
  }

  async createVoucher(req, res) {
    const voucherData = req.body;
    const newVoucher = await voucherService.createVoucher(voucherData);
    res.json(newVoucher);
  }

  async updateVoucher(req, res) {
    const voucherId = req.params.id;
    const voucherData = req.body;
    const updatedVoucher = await voucherService.updateVoucher(
      voucherId,
      voucherData
    );
    res.json(updatedVoucher);
  }

  async deleteVoucher(req, res) {
    const voucherId = req.params.id;
    await voucherService.deleteVoucher(voucherId);
    res.json({ message: "Voucher deleted successfully" });
  }
}

module.exports = new VoucherController();
