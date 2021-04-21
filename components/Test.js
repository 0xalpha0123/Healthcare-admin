import { useTranslation } from 'next-i18next';
import { Button } from '@material-ui/core';
import api from '../api';

function Test() {
  const { t } = useTranslation('common');
  const callApi = () => {
    api.candidates.getCandidates();
  };
  return (
    <Button variant="contained" color="primary" onClick={callApi}>
      {t('save')}
    </Button>
  );
}

export default Test;
