import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import api from '../../api';
import PaymentsList from '../../components/payments/PaymentsList';
function PaymentsPage({ company, payments }) {
  if (!company) {
    return <NoCompany />;
  }
  return <PaymentsList payments={payments} />;
}

export const getServerSideProps = async (ctx) => {
  try {
    await api.auth.getIsAuth(ctx);
    const company = await api.company.getCompanyData(ctx);
    const payments = await api.payments.getPayments(ctx);
    return {
      props: {
        ...(await serverSideTranslations(ctx.locale, ['company', 'navigation', 'payments'])),
        company,
        payments,
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

export default PaymentsPage;
