import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Details from '../../components/company/Details';
function CompanyPage({ company }) {
  return <Details company={company} />;
}

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ['company', 'navigation'])),
  },
});

export default CompanyPage;
