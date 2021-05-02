import Api from './Api';
class Payments extends Api {
  constructor() {
    super();
  }
  async getPayments(ctx) {
    const { data } = await this.api.get('/payments', this.getAuthOptions(ctx));
    return data;
  }
}

export default Payments;
