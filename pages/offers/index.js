import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import api from '../../api';
import NoCompany from '../../components/company/NoCompany';
import OffersList from '../../components/offers/OffersList';
function AddOfferPage({ company }) {
  if (!company) {
    return <NoCompany />;
  }
  return <OffersList offers={company.offers} />;
}

export const getServerSideProps = async (ctx) => {
  try {
    await api.auth.getIsAuth(ctx);
    const company = await api.company.getCompanyData(ctx);
    return {
      props: {
        ...(await serverSideTranslations(ctx.locale, ['company', 'offers', 'navigation'])),
        company,
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
