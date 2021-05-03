import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import CompanyForm from '../../components/company/CompanyForm';
function CompanyEditPage({ company }) {
  return <CompanyForm mode="edit" editedCompanyData={company} />;
}

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ['company', 'navigation'])),
  },
});

export default CompanyEditPage;
