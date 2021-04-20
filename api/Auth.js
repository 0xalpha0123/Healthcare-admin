import Api from './Api';

class Auth extends Api {
  constructor() {
    super();
  }
  async signIn({ email, password }) {
    const response = await this.api.post('/auth/sign-in', { email, password });
    const token = response.data.token;
    //set token
  }
}

export default Auth;
