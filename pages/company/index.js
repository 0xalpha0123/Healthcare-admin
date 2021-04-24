import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import api from '../../api';
import Details from '../../components/company/Details';
import NoCompany from '../../components/company/NoCompany';
function CompanyPage({ company }) {
  if (!company) {
    return <NoCompany />;
  }
  return <Details company={company} />;
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

export default CompanyPage;
