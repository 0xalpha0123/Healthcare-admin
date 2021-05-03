import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import CompanyLocations from '../../components/company/CompanyLocations';

function CompanyEditLocationsPage({ company }) {
  return <CompanyLocations mode="edit" locations={company.locations} />;
}

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ['company', 'navigation'])),
  },
});

export default CompanyEditLocationsPage;
