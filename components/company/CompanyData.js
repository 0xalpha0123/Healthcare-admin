import { useTranslation } from 'next-i18next';
import { Card, CardContent, Link, Container, Typography, Box } from '@material-ui/core';

function CompanyData({ company }) {
  const { t } = useTranslation('company');
  return (
    <Container>
      <Box>
        <Card>
          <CardContent>
            <Box height={company.logo_file_path ? 300 : 0}>
              <img src={company.logo_file_path ? company.logo_file_path : ''} />
            </Box>
            <Typography variant="h5" component="h2">
              {t('company_name')}: {company.name}
            </Typography>
            <Typography>
              {t('description')}: {company.description}
            </Typography>
            <Typography>
              {t('website')}: <Link>{company.website_url}</Link>
            </Typography>
          </CardContent>
        </Card>
      </Box>
    </Container>
  );
}

export default CompanyData;
