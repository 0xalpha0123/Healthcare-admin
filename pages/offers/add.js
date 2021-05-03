import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import dynamic from 'next/dynamic';
import api from '../../api';
function AddOfferPage({ company, professions, agreements }) {
  const OfferForm = dynamic(import('../../components/offers/OfferForm'), { ssr: false });
  return (
    <OfferForm professions={professions} locations={company.locations} agreements={agreements} />
  );
}

export const getServerSideProps = async (ctx) => {
  const professions = await api.offers.getProfessions(ctx);
  const agreements = await api.offers.getAgreements(ctx);
  return {
    props: {
      ...(await serverSideTranslations(ctx.locale, ['offers', 'navigation'])),
      professions,
      agreements,
    },
  };
};

export default AddOfferPage;
