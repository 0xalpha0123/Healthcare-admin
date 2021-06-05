import { Box, Container, Card, Button } from '@material-ui/core';
import Link from 'next/link';
import Alert from '@material-ui/lab/Alert';
import { useTranslation } from 'next-i18next';

function VerificationMessage({ isSuccess }) {
  const { t } = useTranslation('auth');

  return (
    <Container maxWidth="sm">
      <Box m={4}>
        <Card>
          <Box height={300}>
            <img src="/assets/logo.svg" />
          </Box>
          <Box pb={4} px={2} textAlign="center">
            {isSuccess ? (
              <Alert severity="success">{t('verificationSuccess')} </Alert>
            ) : (
              <Alert severity="error">{t('verificationFail')} </Alert>
            )}
            <Link href="/auth">
              <Box mt={2}>
                <Button color="primary" variant="contained">
                  {t('signIn')}
                </Button>
              </Box>
            </Link>
          </Box>
        </Card>
      </Box>
    </Container>
  );
}

export default VerificationMessage;
