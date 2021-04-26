import { Card, CardContent, Grid, Box } from '@material-ui/core';
import { Alert } from '@material-ui/lab';
import { useTranslation } from 'next-i18next';
import CompanyForm from './CompanyForm';
function NoCompany() {
  const { t } = useTranslation('company');

  return (
    <Box maxWidth="700px">
      <Card>
        <CardContent>
          <Alert severity="warning">{t('noCompanyInfo')}</Alert>
          <Box py={2}>
            <CompanyForm mode="add" />
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
}

export default NoCompany;
