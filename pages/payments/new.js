import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import api from '../../api';
import PaymentForm from '../../components/payments/PaymentForm';
function newPaymentPage({ offerId, company, banks }) {
  return <PaymentForm offerId={offerId} banks={banks} />;
}

export const getServerSideProps = async (ctx) => {
  const banks = await api.payments.getBanks(ctx);
  const offerId = ctx.query.offer_id;
  return {
    props: {
      ...(await serverSideTranslations(ctx.locale, ['company', 'payments', 'navigation'])),
      offerId,
      banks,
    },
  };
};

export default newPaymentPage;
