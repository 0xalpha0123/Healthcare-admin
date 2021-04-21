import api from '../api';
export default async function (ctx) {
  try {
    await api.auth.getIsAuth(ctx);
  } catch (err) {
    return false;
  }
  return true;
}
