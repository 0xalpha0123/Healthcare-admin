import axios from 'axios';

class Api {
  constructor() {
    this.api = axios.create({
      baseURL: process.env.NEXT_PUBLIC_API_URL,
    });
  }

  getAuthOptions(ctx) {
    return {
      headers: { authorization: 'Bearer ' + ctx.req.headers.cookie.replace('authorization=', '') },
    };
  }
}

export default Api;
