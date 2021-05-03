import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import CompanyPhotos from '../../components/company/CompanyPhotos';
function CompanyEditPhotosPage({ company }) {
  return <CompanyPhotos mode="edit" photos={company.photos} />;
}

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ['company', 'navigation'])),
  },
});

export default CompanyEditPhotosPage;
