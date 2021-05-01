import Api from './Api';
class Offers extends Api {
  constructor() {
    super();
  }
  async getProfessions(ctx) {
    const { data } = await this.api.get('/offers/professions', this.getAuthOptions(ctx));
    return data;
  }
  async getSpecializations(professionId) {
    const config = {
      ...this.getAuthOptions(),
      params: {
        profession_id: professionId,
      },
    };
    const { data } = await this.api.get('/offers/specializations', config);
    return data;
  }

  async getAgreements(ctx) {
    const { data } = await this.api.get('/offers/agreement-types', this.getAuthOptions(ctx));
    return data;
  }

  async postOffer(offer) {
    const { data } = await this.api.post('/offers', offer, this.getAuthOptions());
    return data;
  }
}

export default Offers;
