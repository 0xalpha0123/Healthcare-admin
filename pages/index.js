import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Test from '../components/Test';
import getIsAuth from '../common/getIsAuth';

const Home = (props) => {
  return <Test />;
};

export default Home;

export const getServerSideProps = async (ctx) => {
  const isAuth = await getIsAuth(ctx);
  if (!isAuth)
    return {
      redirect: {
        destination: '/auth',
        permanent: false,
      },
    };
  return {
    props: {
      ...(await serverSideTranslations(ctx.locale, ['common'])),
    },
  };
};
