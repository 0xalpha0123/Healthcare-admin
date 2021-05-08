import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import api from '../../api';
import CandidatesList from '../../components/candidates/CandidatesList';
function CandidatesPage({ company, offerId, candidates }) {
  return (
    <CandidatesList offers={company.offers} initOfferId={offerId} initCandidates={candidates} />
  );
}

export const getServerSideProps = async (ctx) => {
  const candidates = await api.candidates.getCandidates(ctx);
  const { offer_id } = ctx.query;
  return {
    props: {
      ...(await serverSideTranslations(ctx.locale, ['company', 'candidates', 'navigation'])),
      offerId: offer_id || '',
      candidates,
    },
  };
};

export default CandidatesPage;
