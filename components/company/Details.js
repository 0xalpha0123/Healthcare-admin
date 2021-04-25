import { useTranslation } from 'next-i18next';
import { Card, CardContent, Container, Typography, Box, Grid, Divider } from '@material-ui/core';
import { Business, Launch } from '@material-ui/icons';
import CompanyPhotos from './CompanyPhotos';

function Details({ company }) {
  const { t } = useTranslation('company');
  return (
    <Container>
      <Box>
        <Card>
          <CardContent>
            <Box px={4}>
              <Grid container spacing={3}>
                <Grid item xs={4}>
                  <Box>
                    <img src={company.logo_file_path} />
                  </Box>
                </Grid>
                <Grid item xs={5}>
                  <Box p={6}>
                    <Typography variant="h5" component="h2">
                      <Business /> {company.name}
                    </Typography>
                    <Box py={2}>
                      <a href={company.website_url} target="_blank">
                        <Launch></Launch> {company.website_url}
                      </a>
                    </Box>
                  </Box>
                </Grid>
              </Grid>
              <Box mb={2}>
                <Box pb={2}>{t('presentation')}</Box>

                <Divider />
                <Box
                  pt={2}
                  textAlign="left"
                  dangerouslySetInnerHTML={{ __html: company.description }}
                ></Box>
                <CompanyPhotos photos={company.photos} />
              </Box>
            </Box>
          </CardContent>
        </Card>
      </Box>
    </Container>
  );
}

export default Details;
