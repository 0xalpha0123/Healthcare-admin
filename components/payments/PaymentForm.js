import { useTranslation } from 'next-i18next';
import { useForm, Controller } from 'react-hook-form';
import { useEffect, useState } from 'react';
import { TextField, Card, Box, Button, CardContent, MenuItem } from '@material-ui/core';
import { Alert } from '@material-ui/lab';
import api from '../../api';
import router from 'next/router';
import ValidationAlert from '../ui/ValidationAlert';
function PaymentForm({ offerId, banks }) {
  const { t } = useTranslation('payments');
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [serverError, setServerError] = useState('');

  const onSubmit = async (data) => {
    try {
      const requestData = {
        extension_days: data.option.extensionDays,
        amount: data.option.amount,
        offer_id: offerId,
        bank_id: data.bankId,
      };
      const paymentLink = await api.payments.postTransaction(requestData);
      window.location.href = paymentLink;
    } catch (err) {
      const resMsg = err?.response?.data?.message || err.message;
      const message = Array.isArray(resMsg)
        ? resMsg.map((el, key) => <div key={key}>{el}</div>)
        : resMsg;
      setServerError(message);
    }
  };
  const priceOptions = [
    {
      extensionDays: 5,
      amount: 10.0,
    },
    {
      extensionDays: 10,
      amount: 15.0,
    },
    ,
    {
      extensionDays: 20,
      amount: 20.0,
    },
  ];
  return (
    <Box maxWidth={500} margin="0 auto">
      <Card>
        <CardContent>
          <Box textAlign="center" pb={4} fontSize="1.5em" fontWeight="bold">
            {t('newPayment')}
          </Box>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Controller
              name="option"
              control={control}
              rules={{ required: true }}
              defaultValue=""
              render={({ field }) => (
                <TextField {...field} select label={t('chooseOption')} fullWidth>
                  {priceOptions.map((option) => (
                    <MenuItem key={option.extensionDays} value={option}>
                      {option.extensionDays} {t('days')} - {option.amount} {t('currency')}
                    </MenuItem>
                  ))}
                </TextField>
              )}
            />
            <ValidationAlert error={errors.option} />
            <Box py={4}>
              <Controller
                name="bankId"
                control={control}
                rules={{ required: true }}
                defaultValue=""
                render={({ field }) => (
                  <TextField {...field} select label={t('chooseBank')} fullWidth>
                    {banks.map((option) => (
                      <MenuItem key={option.id} value={option.id}>
                        <Box height={40} margin={0}>
                          <img src={option.img} alt={option.name} />
                        </Box>
                      </MenuItem>
                    ))}
                  </TextField>
                )}
              />
              <ValidationAlert error={errors.bankId} />
            </Box>

            {serverError && <Alert severity="error">{serverError}</Alert>}
            <Box textAlign="center" mt={4}>
              <Button variant="contained" type="submit" color="primary">
                {t('pay')}
              </Button>
            </Box>
          </form>
        </CardContent>
      </Card>
    </Box>
  );
}

export default PaymentForm;
