import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import NoCompany from '../components/company/NoCompany';
function NoCompanyPage() {
  return <NoCompany />;
}

export const getServerSideProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ['company'])),
  },
});

export default NoCompanyPage;
