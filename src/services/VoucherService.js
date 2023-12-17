const voucherRepository = require("../repositories/VoucherRepository");

class VoucherService {
  async getAllVouchers() {
    return voucherRepository.getAll();
  }

  async getVoucherById(id) {
    return voucherRepository.getById(id);
  }

  async createVoucher(voucherData) {
    return voucherRepository.create(voucherData);
  }

  async updateVoucher(id, voucherData) {
    return voucherRepository.update(id, voucherData);
  }

  async deleteVoucher(id) {
    return voucherRepository.delete(id);
  }
}

module.exports = new VoucherService();
