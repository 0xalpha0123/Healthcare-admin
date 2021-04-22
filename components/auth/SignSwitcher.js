import { useTranslation } from 'next-i18next';
import { Box, Button } from '@material-ui/core';
function SignSwitcher({ toggleIsSignIn, isSignIn }) {
  const { t } = useTranslation('auth');

  const btn = isSignIn ? (
    <Button color="primary" onClick={toggleIsSignIn}>
      {t('noAccountQuestion')}
    </Button>
  ) : (
    <Button color="primary" onClick={toggleIsSignIn}>
      {t('signUpAlreadyQuestion')}
    </Button>
  );
  return <Box mt={4}>{btn}</Box>;
}

export default SignSwitcher;
