import { useTranslation } from 'next-i18next';
import { useForm, Controller } from 'react-hook-form';
import { useRouter } from 'next/router';
import api from '../../api';

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
import { useState } from 'react';

function SignIn() {
  const { t } = useTranslation('auth');
  const { control, handleSubmit } = useForm();
  const [serverError, setServerError] = useState('');
  const router = useRouter();

  const onSubmit = async (data) => {
    try {
      await api.auth.signIn(data);
      router.push('/');
    } catch (err) {
      console.log(err);
      const resMsg =
        err.response && err.response.data ? err.response.data.message : 'Unexpected error';
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
              <Box textAlign="center">{t('signingIn')}</Box>
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

              <Box textAlign="center" mt={4}>
                <Button variant="contained" type="submit" color="primary">
                  {t('signIn')}
                </Button>
              </Box>
            </form>
          </CardContent>
        </Card>
      </Box>
    </Container>
  );
}

export default SignIn;
