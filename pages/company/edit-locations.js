import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import api from '../../api';
import CompanyLocations from '../../components/company/CompanyLocations';
import NoCompany from '../../components/company/NoCompany';
function CompanyEditLocationsPage({ company }) {
  if (!company) {
    return <NoCompany />;
  }
  return <CompanyLocations mode="edit" locations={company.locations} />;
}

export const getServerSideProps = async (ctx) => {
  try {
    await api.auth.getIsAuth(ctx);
    const company = await api.company.getCompanyData(ctx);
    return {
      props: {
        ...(await serverSideTranslations(ctx.locale, ['company', 'navigation'])),
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

export default CompanyEditLocationsPage;
