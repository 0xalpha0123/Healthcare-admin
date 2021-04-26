import api from '../api';

const Home = () => {
  return null;
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
    redirect: {
      destination: '/company',
      permanent: false,
    },
  };
};
