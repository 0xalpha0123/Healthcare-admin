import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import api from '../../api';
import OfferForm from '../../components/offers/OfferForm';
function AddOfferPage({ company, professions, agreements }) {
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
