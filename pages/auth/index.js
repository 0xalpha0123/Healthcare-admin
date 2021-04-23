import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import api from '../../api';
import SignInOrUp from '../../components/auth/SignInOrUp';
function AuthPage() {
  return <SignInOrUp />;
}

export const getServerSideProps = async (ctx) => {
  try {
    await api.auth.getIsAuth(ctx);
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    };
  } catch (err) {
    return {
      props: {
        ...(await serverSideTranslations(ctx.locale, ['auth'])),
      },
    };
  }
};

export default AuthPage;
