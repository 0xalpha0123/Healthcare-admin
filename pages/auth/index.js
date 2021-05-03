import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import SignInOrUp from '../../components/auth/SignInOrUp';
function AuthPage() {
  return <SignInOrUp />;
}

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ['auth'])),
  },
});

export default AuthPage;
