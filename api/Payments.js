import Api from './Api';
class Payments extends Api {
  constructor() {
    super();
  }
  async getPayments(ctx) {
    const { data } = await this.api.get('/payments', this.getAuthOptions(ctx));
    return data;
  }

  async getBanks(ctx) {
    const { data } = await this.api.get('/payments/banks', this.getAuthOptions(ctx));
    return data;
  }
  async postTransaction(transaction) {
    const { data } = await this.api.post(
      '/payments/transaction',
      transaction,
      this.getAuthOptions()
    );
    return data;
  }
}

export default Payments;
