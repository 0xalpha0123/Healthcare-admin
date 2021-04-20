import { useTranslation } from 'next-i18next';
import { Button } from '@material-ui/core';

function Test() {
  const { t } = useTranslation('common');
  return (
    <Button variant="contained" color="primary">
      {t('save')}
    </Button>
  );
}

export default Test;
