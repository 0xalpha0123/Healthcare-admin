import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import api from '../../api';
import CompanyForm from '../../components/company/CompanyForm';
import NoCompany from '../../components/company/NoCompany';
function CompanyEditPage({ company }) {
  if (!company) {
    return <NoCompany />;
  }
  return <CompanyForm mode="edit" editedCompanyData={company} />;
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

export default CompanyEditPage;
