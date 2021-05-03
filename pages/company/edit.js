import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import dynamic from 'next/dynamic';
function CompanyEditPage({ company }) {
  const CompanyForm = dynamic(import('../../components/company/CompanyForm'), { ssr: false });
  return <CompanyForm mode="edit" editedCompanyData={company} />;
}

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ['company', 'navigation'])),
  },
});

export default CompanyEditPage;
