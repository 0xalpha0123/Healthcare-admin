import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import api from '../../api';
import NoCompany from '../../components/company/NoCompany';
import CandidatesList from '../../components/candidates/CandidatesList';
function CandidatesPage({ company, offerId, candidates }) {
  if (!company) {
    return <NoCompany />;
  }
  return (
    <CandidatesList offers={company.offers} initOfferId={offerId} initCandidates={candidates} />
  );
}

export const getServerSideProps = async (ctx) => {
  try {
    await api.auth.getIsAuth(ctx);
    const company = await api.company.getCompanyData(ctx);
    const candidates = await api.candidates.getCandidates(ctx);
    const { offer_id } = ctx.query;
    return {
      props: {
        ...(await serverSideTranslations(ctx.locale, ['company', 'candidates', 'navigation'])),
        company,
        offerId: offer_id || '',
        candidates,
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

export default CandidatesPage;
