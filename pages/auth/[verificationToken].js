import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import VerificationMessage from '../../components/auth/VerificationMessage';
import api from '../../api';
function VerifyAccountPage({ isSuccess }) {
  return <VerificationMessage isSuccess={isSuccess} />;
}

export const getServerSideProps = async (ctx) => {
  const { verificationToken } = ctx.params;
  let isSuccess;
  try {
    await api.auth.verifyEmail(verificationToken);
    isSuccess = true;
  } catch (err) {
    isSuccess = false;
  }
  return {
    props: {
      ...(await serverSideTranslations(ctx.locale, ['auth'])),
      isSuccess,
    },
  };
};

export default VerifyAccountPage;
