import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import api from '../../api';
import OfferForm from '../../components/offers/OfferForm';
function EditOfferPage({ company, professions, agreements, offer }) {
  return (
    <OfferForm
      mode="edit"
      professions={professions}
      locations={company.locations}
      agreements={agreements}
      editedOfferData={offer}
    />
  );
}

export const getServerSideProps = async (ctx) => {
  try {
    const professions = await api.offers.getProfessions(ctx);
    const agreements = await api.offers.getAgreements(ctx);
    const offer = await api.offers.getOffer(ctx);
    return {
      props: {
        ...(await serverSideTranslations(ctx.locale, ['offers', 'navigation'])),
        professions,
        agreements,
        offer,
      },
    };
  } catch (err) {
    if (err?.response?.status === 404) {
      return {
        notFound: true,
      };
    }
  }
};

export default EditOfferPage;
