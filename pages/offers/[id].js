import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import api from '../../api';
import NoCompany from '../../components/company/NoCompany';
import OfferForm from '../../components/offers/OfferForm';
function EditOfferPage({ company, professions, agreements, offer }) {
  if (!company) {
    return <NoCompany />;
  }
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
    await api.auth.getIsAuth(ctx);
    const company = await api.company.getCompanyData(ctx);
    const professions = await api.offers.getProfessions(ctx);
    const agreements = await api.offers.getAgreements(ctx);
    const offer = await api.offers.getOffer(ctx);
    return {
      props: {
        ...(await serverSideTranslations(ctx.locale, ['company', 'offers', 'navigation'])),
        company,
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
    return {
      redirect: {
        destination: '/auth',
        permanent: false,
      },
    };
  }
};

export default EditOfferPage;
