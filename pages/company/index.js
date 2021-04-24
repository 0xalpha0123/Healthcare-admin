import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import api from '../../api';
import CompanyData from '../../components/company/CompanyData';
function CompanyPage({ company }) {
  return <CompanyData company={company} />;
}

export const getServerSideProps = async (ctx) => {
  try {
    await api.auth.getIsAuth(ctx);
    const company = await api.company.getCompanyData(ctx);
    return {
      props: {
        ...(await serverSideTranslations(ctx.locale, ['company'])),
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
