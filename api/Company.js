import Api from './Api';
class Company extends Api {
  constructor() {
    super();
  }
  async getCompanyData(ctx) {
    const { data } = await this.api.get(`/companies/by-user`, this.getAuthOptions(ctx));
    return data;
  }
}

export default Company;
