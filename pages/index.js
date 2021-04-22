import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Test from '../components/Test';
import api from '../api';

const Home = (props) => {
  return <Test />;
};

export default Home;

export const getServerSideProps = async (ctx) => {
  try {
    await api.auth.getIsAuth(ctx);
  } catch (err) {
    return {
      redirect: {
        destination: '/auth',
        permanent: false,
      },
    };
  }
  return {
    props: {
      ...(await serverSideTranslations(ctx.locale, ['common'])),
    },
  };
};
