import { useTranslation } from 'next-i18next';
import {
  Card,
  CardContent,
  Link,
  Container,
  Typography,
  Box,
  Grid,
  Divider,
  Button,
} from '@material-ui/core';
import { Business, Launch } from '@material-ui/icons';
import CompanyActions from './CompanyActions';

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
                  <Box p={2}>
                    <img src={company.logo_file_path} />
                  </Box>
                </Grid>
                <Grid item xs={5}>
                  <Box p={2}>
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
                <Grid item xs={3}>
                  <CompanyActions />
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
              </Box>
            </Box>
          </CardContent>
        </Card>
      </Box>
    </Container>
  );
}

export default Details;
