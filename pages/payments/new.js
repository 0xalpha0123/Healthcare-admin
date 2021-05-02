import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import api from '../../api';
import NoCompany from '../../components/company/NoCompany';
import PaymentForm from '../../components/payments/PaymentForm';
function newPaymentPage({ offerId, company, banks }) {
  if (!company) return <NoCompany />;
  return <PaymentForm offerId={offerId} banks={banks} />;
}

export const getServerSideProps = async (ctx) => {
  try {
    await api.auth.getIsAuth(ctx);
    const company = await api.company.getCompanyData(ctx);
    const banks = await api.payments.getBanks(ctx);
    const offerId = ctx.query.offer_id;
    return {
      props: {
        ...(await serverSideTranslations(ctx.locale, ['company', 'payments', 'navigation'])),
        company,
        offerId,
        banks,
      },
    };
  } catch (err) {
    return {
      redirect: {
        destination: '/auth',
        permanent: false,
      },
    };
  }
};

export default newPaymentPage;
