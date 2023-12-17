const Voucher = require("../entities/Voucher");

class VoucherRepository {
  async getAll() {
    return Voucher.find();
  }

  async getById(id) {
    return Voucher.findById(id);
  }

  async create(voucherData) {
    return Voucher.create(voucherData);
  }

  async update(id, voucherData) {
    return Voucher.findByIdAndUpdate(id, voucherData, { new: true });
  }

  async delete(id) {
    return Voucher.findByIdAndDelete(id);
  }
}

module.exports = new VoucherRepository();
