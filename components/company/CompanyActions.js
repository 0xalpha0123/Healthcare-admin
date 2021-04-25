import { Box, Button } from '@material-ui/core';
import { useTranslation } from 'next-i18next';
import Link from 'next/link';

function CompanyActions() {
  const { t } = useTranslation('company');

  return (
    <Box>
      <Box my={1} textAlign="right">
        <Link href="/company/edit">
          <Button variant="contained" color="primary" fullWidth>
            {t('editCompanyData')}
          </Button>
        </Link>
      </Box>
      <Box my={1} textAlign="right">
        <Button variant="contained" color="primary" fullWidth>
          {t('editLocations')}
        </Button>
      </Box>
      <Box my={1} textAlign="right">
        <Button variant="contained" color="primary" fullWidth>
          {t('editPhotos')}
        </Button>
      </Box>
    </Box>
  );
}

export default CompanyActions;
