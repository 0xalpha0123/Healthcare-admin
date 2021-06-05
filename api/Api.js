import axios from 'axios';

class Api {
  constructor() {
    this.api = axios.create({
      baseURL: process.env.NEXT_PUBLIC_API_URL,
    });
  }

  getAuthOptions(ctx = null) {
    const cookiesString = ctx?.req.headers.cookie || document?.cookie;
    const cookies = cookiesString
      ?.split(';')
      .map((el) => ({ label: el.split('=')[0].trim(), value: el.split('=')[1].trim() }));
    const tokenCookie = cookies.find((el) => el.label === 'authorization');
    if (!tokenCookie) {
      throw new Error('No authorization cookie');
    }
    const token = tokenCookie.value;
    return {
      headers: { authorization: 'Bearer ' + token },
    };
  }
}

export default Api;
