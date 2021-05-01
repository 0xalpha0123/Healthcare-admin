import { useTranslation } from 'next-i18next';
import { useForm, Controller } from 'react-hook-form';
import { useState } from 'react';
import {
  TextField,
  Card,
  Box,
  Button,
  CardContent,
  Grid,
  MenuItem,
  Select,
} from '@material-ui/core';
import { Alert } from '@material-ui/lab';
import api from '../../api';
import router from 'next/router';

function OfferForm({ mode = 'add', editedOfferData, professions, locations, agreements }) {
  const { t } = useTranslation('offers');
  const defaultValues = mode === 'edit' && editedOfferData ? editedOfferData : {};
  const { control, handleSubmit } = useForm({ defaultValues });
  const [serverError, setServerError] = useState('');
  const [specializations, setSpecializations] = useState([]);

  const getSpecializations = async (event, onChange) => {
    const fetchedSpecializations = await api.offers.getSpecializations(event.target.value);
    setSpecializations([...fetchedSpecializations]);
    onChange(event);
  };

  const onSubmit = async (data) => {
    let offer = {
      ...data,
      company_location_ids: data.company_location_ids.map((el) => el.id),
      agreement_type_ids: data.agreement_type_ids.map((el) => el.id),
    };

    try {
      if (mode === 'add') {
        await api.offers.postOffer(offer);
      } else {
        //
      }
      // router.push('/offers');
    } catch (err) {
      const resMsg = err?.response?.data?.message || err.message;
      const message = Array.isArray(resMsg)
        ? resMsg.map((el, key) => <div key={key}>{el}</div>)
        : resMsg;
      setServerError(message);
    }
  };

  return (
    <Card>
      <CardContent>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Box my={2}>
            <Controller
              name="title"
              control={control}
              defaultValue=""
              render={({ field }) => <TextField {...field} label={t('title')} fullWidth />}
            />
          </Box>
          <Box my={2}>
            <Controller
              name="description"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <TextField
                  {...field}
                  label={t('description')}
                  fullWidth
                  multiline
                  rows={12}
                  variant="outlined"
                />
              )}
            />
          </Box>
          <Box mx={1}>
            <Grid container spacing={6}>
              <Grid item xs={6}>
                <Controller
                  name="salary_from"
                  control={control}
                  defaultValue=""
                  render={({ field }) => (
                    <TextField {...field} label={t('salaryFrom')} fullWidth type="number" />
                  )}
                />
              </Grid>
              <Grid item xs={6}>
                <Controller
                  name="salary_to"
                  control={control}
                  defaultValue=""
                  render={({ field }) => (
                    <TextField {...field} label={t('salaryTo')} fullWidth type="number" />
                  )}
                />
              </Grid>
            </Grid>
          </Box>
          <Box mx={1}>
            <Grid container spacing={6}>
              <Grid item xs={6}>
                <Controller
                  name="profession_id"
                  control={control}
                  defaultValue=""
                  render={({ field }) => (
                    <TextField
                      {...field}
                      select
                      label={t('profession')}
                      fullWidth
                      onChange={(e) => getSpecializations(e, field.onChange)}
                    >
                      {professions.map((option) => (
                        <MenuItem key={option.id} value={option.id}>
                          {option.name}
                        </MenuItem>
                      ))}
                    </TextField>
                  )}
                />
              </Grid>
              <Grid item xs={6}>
                <Controller
                  name="specialization_id"
                  control={control}
                  defaultValue=""
                  render={({ field }) => (
                    <TextField {...field} select label={t('specialization')} fullWidth>
                      {specializations.map((option) => (
                        <MenuItem key={option.id} value={option.id}>
                          {option.name}
                        </MenuItem>
                      ))}
                    </TextField>
                  )}
                />
              </Grid>
            </Grid>
          </Box>
          <Box mx={1}>
            <Grid container spacing={6}>
              <Grid item xs={6}>
                <Controller
                  name="company_location_ids"
                  control={control}
                  defaultValue={[]}
                  render={({ field }) => (
                    <TextField
                      select
                      label={t('availableLocations')}
                      fullWidth
                      SelectProps={{
                        multiple: true,
                        value: field.value,
                        onChange: field.onChange,
                        renderValue: (selected) => selected.map((el) => el.name).join(', '),
                      }}
                    >
                      {locations.map((option) => (
                        <MenuItem key={option.id} value={option}>
                          {option.name}
                        </MenuItem>
                      ))}
                    </TextField>
                  )}
                />
              </Grid>
              <Grid item xs={6}>
                <Controller
                  name="agreement_type_ids"
                  control={control}
                  defaultValue={[]}
                  render={({ field }) => (
                    <TextField
                      select
                      label={t('availableAgreements')}
                      fullWidth
                      SelectProps={{
                        multiple: true,
                        value: field.value,
                        onChange: field.onChange,
                        renderValue: (selected) => selected.map((el) => el.name).join(', '),
                      }}
                    >
                      {agreements.map((option) => (
                        <MenuItem key={option.id} value={option}>
                          {option.name}
                        </MenuItem>
                      ))}
                    </TextField>
                  )}
                />
              </Grid>
            </Grid>
          </Box>

          {serverError && <Alert severity="error">{serverError}</Alert>}
          <Box textAlign="center" mt={4}>
            <Button variant="contained" type="submit" color="primary">
              {t('add')}
            </Button>
          </Box>
        </form>
      </CardContent>
    </Card>
  );
}

export default OfferForm;
