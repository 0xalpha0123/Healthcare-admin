import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Test from '../components/Test';
import AuthHoc from '../components/auth/AuthHoc';

function Home() {
  return <Test />;
}

export default AuthHoc(Home);

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ['common'])),
  },
});
