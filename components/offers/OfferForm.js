import { useTranslation } from 'next-i18next';
import { useForm, Controller } from 'react-hook-form';
import { useEffect, useState } from 'react';
import {
  TextField,
  Card,
  Box,
  Button,
  CardContent,
  Grid,
  MenuItem,
  FormControlLabel,
  Checkbox,
} from '@material-ui/core';
import { Alert } from '@material-ui/lab';
import api from '../../api';
import router from 'next/router';
import { Editor } from 'react-draft-wysiwyg';
import { EditorState, ContentState, convertFromHTML } from 'draft-js';
import { stateToHTML } from 'draft-js-export-html';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';

function OfferForm({ mode = 'add', editedOfferData, professions, locations, agreements }) {
  const defaultValues = (() => {
    if (mode !== 'edit') return {};
    return {
      ...editedOfferData,
      profession_id: String(editedOfferData.profession_id),
      specialization_id: String(editedOfferData.specialization_id),
    };
  })();
  const initEditorState =
    mode === 'edit' && editedOfferData
      ? EditorState.createWithContent(
          ContentState.createFromBlockArray(convertFromHTML(editedOfferData.description))
        )
      : EditorState.createEmpty();
  const [editorState, onEditorStateChange] = useState(initEditorState);

  const { t } = useTranslation('offers');
  const { control, handleSubmit } = useForm({ defaultValues });
  const [serverError, setServerError] = useState('');
  const [specializations, setSpecializations] = useState([]);

  const getSpecializations = async (event, onChange, id) => {
    const value = event ? event.target.value : id;
    const fetchedSpecializations = await api.offers.getSpecializations(value);
    setSpecializations([...fetchedSpecializations]);
    if (onChange) {
      onChange(event);
    }
  };

  const onSubmit = async (data) => {
    let offer = {
      ...data,
      company_location_ids: data.locations.map((el) => el.id),
      agreement_type_ids: data.agreement_types.map((el) => el.id),
      description: stateToHTML(editorState.getCurrentContent()),
    };

    try {
      if (mode === 'add') {
        await api.offers.postOffer(offer);
      } else {
        await api.offers.putOffer(editedOfferData.id, offer);
      }
      router.push('/offers');
    } catch (err) {
      const resMsg = err?.response?.data?.message || err.message;
      const message = Array.isArray(resMsg)
        ? resMsg.map((el, key) => <div key={key}>{el}</div>)
        : resMsg;
      setServerError(message);
    }
  };

  useEffect(async () => {
    if (editedOfferData?.profession_id) {
      getSpecializations(null, null, editedOfferData.profession_id);
    }
  }, []);

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
            <Editor editorState={editorState} onEditorStateChange={onEditorStateChange} />
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
                  name="locations"
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
                  name="agreement_types"
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
            <Box py={2}>
              <Controller
                name="active"
                control={control}
                defaultValue={false}
                render={({ field }) => (
                  <FormControlLabel control={<Checkbox {...field} />} label={t('active')} />
                )}
              />
            </Box>
          </Box>

          {serverError && <Alert severity="error">{serverError}</Alert>}
          <Box textAlign="center" mt={4}>
            <Button variant="contained" type="submit" color="primary">
              {t('save')}
            </Button>
          </Box>
        </form>
      </CardContent>
    </Card>
  );
}

export default OfferForm;
