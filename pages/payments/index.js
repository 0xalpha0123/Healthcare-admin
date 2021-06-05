import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import api from '../../api';
import PaymentsList from '../../components/payments/PaymentsList';
function PaymentsPage({ payments }) {
  return <PaymentsList payments={payments} />;
}

export const getServerSideProps = async (ctx) => {
  const payments = await api.payments.getPayments(ctx);
  return {
    props: {
      ...(await serverSideTranslations(ctx.locale, ['company', 'navigation', 'payments'])),
      payments,
    },
  };
};

export default PaymentsPage;
