import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import api from '../../api';
import CompanyPhotos from '../../components/company/CompanyPhotos';
import NoCompany from '../../components/company/NoCompany';
function CompanyEditPhotosPage({ company }) {
  if (!company) {
    return <NoCompany />;
  }
  return <CompanyPhotos mode="edit" photos={company.photos} />;
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

export default CompanyEditPhotosPage;
