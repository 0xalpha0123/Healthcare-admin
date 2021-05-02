import { useTranslation } from 'next-i18next';
import { useForm, Controller } from 'react-hook-form';
import { useState } from 'react';
import { TextField, Card, CardContent, Box, Button } from '@material-ui/core';
import { Alert } from '@material-ui/lab';
import api from '../../api';
import router from 'next/router';

function CompanyForm({ mode, editedCompanyData }) {
  const { t } = useTranslation('company');
  const defaultValues = mode === 'edit' && editedCompanyData ? editedCompanyData : {};
  const { control, handleSubmit } = useForm({ defaultValues });
  const [serverError, setServerError] = useState('');
  const [file, setFile] = useState(null);

  const onSubmit = async (data) => {
    try {
      const logo_file_path = file
        ? await api.company.uploadLogo(file)
        : editedCompanyData?.logo_file_path;
      if (mode === 'add') {
        await api.company.postCompany({ ...data, logo_file_path });
      } else {
        await api.company.editCompany({ ...data, logo_file_path });
      }
      router.push('/company');
    } catch (err) {
      const resMsg = err?.response?.data?.message || 'Unexpected error';
      const message = Array.isArray(resMsg)
        ? resMsg.map((el, key) => <div key={key}>{el}</div>)
        : resMsg;
      setServerError(message);
    }
  };

  const handleFile = (e) => {
    setFile(e.target.files[0]);
  };
  return (
    <Card>
      <CardContent>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Box my={2}>
            <Controller
              name="name"
              control={control}
              defaultValue=""
              render={({ field }) => <TextField {...field} label={t('companyName')} fullWidth />}
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
                  label={t('presentation')}
                  fullWidth
                  multiline
                  rows={12}
                  variant="outlined"
                />
              )}
            />
          </Box>
          <Box my={2}>
            <Controller
              name="website_url"
              control={control}
              defaultValue=""
              render={({ field }) => <TextField {...field} label={t('websiteUrl')} fullWidth />}
            />
          </Box>
          <Box my={2}>
            <Button variant="contained" component="label">
              {file?.name || t('uploadLogo')}
              <input type="file" hidden onChange={handleFile} />
            </Button>
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

export default CompanyForm;
