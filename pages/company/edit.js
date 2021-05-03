import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import dynamic from 'next/dynamic';
const CompanyForm = dynamic(import('../../components/company/CompanyForm'), { ssr: false });

function CompanyEditPage({ company }) {
  return <CompanyForm mode="edit" editedCompanyData={company} />;
}

export const getServerSideProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ['company', 'navigation'])),
  },
});

export default CompanyEditPage;
