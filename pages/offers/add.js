import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import api from '../../api';
import NoCompany from '../../components/company/NoCompany';
import OfferForm from '../../components/offers/OfferForm';
function AddOfferPage({ company, professions, agreements }) {
  if (!company) {
    return <NoCompany />;
  }
  return (
    <OfferForm professions={professions} locations={company.locations} agreements={agreements} />
  );
}

export const getServerSideProps = async (ctx) => {
  try {
    await api.auth.getIsAuth(ctx);
    const company = await api.company.getCompanyData(ctx);
    const professions = await api.offers.getProfessions(ctx);
    const agreements = await api.offers.getAgreements(ctx);
    return {
      props: {
        ...(await serverSideTranslations(ctx.locale, ['company', 'offers', 'navigation'])),
        company,
        professions,
        agreements,
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

export default AddOfferPage;
