import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import OffersList from '../../components/offers/OffersList';
function AddOfferPage({ company }) {
  return <OffersList offers={company.offers} />;
}

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ['offers', 'navigation'])),
  },
});

export default AddOfferPage;
