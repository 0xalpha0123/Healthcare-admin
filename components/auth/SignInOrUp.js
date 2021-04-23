import { useTranslation } from 'next-i18next';
import { useForm, Controller } from 'react-hook-form';
import { useRouter } from 'next/router';
import api from '../../api';
import SignSwitcher from './SignSwitcher';

import {
  Card,
  CardContent,
  TextField,
  Container,
  Typography,
  Box,
  Button,
} from '@material-ui/core';
import Alert from '@material-ui/lab/Alert';
import { useCallback, useState } from 'react';

function SignInOrUp() {
  const { t } = useTranslation('auth');

  const { control, handleSubmit } = useForm();
  const [serverError, setServerError] = useState('');
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [isSignIn, setIsSignIn] = useState(true);

  const router = useRouter();

  const toggleIsSignIn = () => {
    setIsSignIn(!isSignIn);
  };

  const onSubmit = async (data, e) => {
    setShowSuccessMessage(false);
    setServerError('');
    e.target.reset();
    try {
      if (isSignIn) {
        await api.auth.signIn(data);
        router.push('/');
      } else {
        await api.auth.signUp(data);
        toggleIsSignIn();
        setShowSuccessMessage(true);
      }
    } catch (err) {
      const resMsg = err?.response?.data?.message || 'Unexpected error';
      const message = Array.isArray(resMsg)
        ? resMsg.map((el, key) => <div key={key}>{el}</div>)
        : resMsg;
      setServerError(message);
    }
  };

  return (
    <Container maxWidth="sm">
      <Box m={4}>
        <Card>
          <CardContent>
            <Box height={300}>
              <img src="/logo.svg" />
            </Box>
            <Typography variant="h4">
              <Box textAlign="center">{isSignIn ? t('signingIn') : t('signingUp')}</Box>
            </Typography>
            <form onSubmit={handleSubmit(onSubmit)}>
              <Box my={2}>
                <Controller
                  name="email"
                  control={control}
                  defaultValue=""
                  render={({ field }) => <TextField {...field} label={t('email')} fullWidth />}
                />
              </Box>
              <Box my={2}>
                <Controller
                  name="password"
                  control={control}
                  defaultValue=""
                  render={({ field }) => (
                    <TextField {...field} label={t('password')} fullWidth type="password" />
                  )}
                />
              </Box>

              {serverError && <Alert severity="error">{serverError}</Alert>}
              {showSuccessMessage && <Alert severity="success">{t('signUpSuccess')}</Alert>}

              <Box textAlign="center" mt={4}>
                <Button variant="contained" type="submit" color="primary">
                  {isSignIn ? t('signIn') : t('signUp')}
                </Button>
              </Box>
              <SignSwitcher toggleIsSignIn={toggleIsSignIn} isSignIn={isSignIn} />
            </form>
          </CardContent>
        </Card>
      </Box>
    </Container>
  );
}

export default SignInOrUp;
