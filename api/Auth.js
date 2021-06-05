import Api from './Api';

class Auth extends Api {
  constructor() {
    super();
  }
  async signIn({ email, password }) {
    const response = await this.api.post('/auth/sign-in', { email, password });
    const token = response.data.accessToken;
    document.cookie = `authorization=${token};path=/`;
  }
  signUp({ email, password }) {
    return this.api.post('/auth/sign-up', { email, password });
  }

  getIsAuth(ctx) {
    return this.api.get('/auth', this.getAuthOptions(ctx));
  }

  verifyEmail(verificationToken) {
    return this.api.post('/auth/verify-email/' + verificationToken);
  }
}

export default Auth;
