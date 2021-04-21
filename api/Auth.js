import Api from './Api';

class Auth extends Api {
  constructor() {
    super();
  }
  async signIn({ email, password }) {
    const response = await this.api.post('/auth/sign-in', { email, password });
    const token = response.data.accessToken;
    document.cookie = `authorization=${token};`;
  }

  getIsAuth(ctx) {
    return this.api.get('/auth', this.getAuthOptions(ctx));
  }
}

export default Auth;
