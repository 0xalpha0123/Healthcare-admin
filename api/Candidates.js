import Api from './Api';
class Candidates extends Api {
  constructor() {
    super();
  }
  async getCandidates(ctx, OfferId) {
    const offer_id = ctx?.query?.offer_id || OfferId;
    const config = {
      ...this.getAuthOptions(ctx),
    };
    if (offer_id) {
      config.params = {
        offer_id,
      };
    }
    const { data } = await this.api.get('/candidates', config);
    return data;
  }
}

export default Candidates;
