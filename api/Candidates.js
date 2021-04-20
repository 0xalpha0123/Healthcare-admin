import Api from './Api';
class Candidates extends Api {
  constructor() {
    super();
  }
  async getCandidates(ctx) {
    const { data } = await this.api.get('/candidates', this.getAuthOptions(ctx));
    return data;
  }
}

export default Candidates;
