import LocationAutocomplete from '../ui/LocationAutocomplete';
import { Box, TextField, Card, CardContent, Button } from '@material-ui/core';
import { Alert } from '@material-ui/lab';
import { useState } from 'react';
import { useTranslation } from 'next-i18next';
import api from '../../api';
function CompanyLocationForm({ onAdd }) {
  const { t } = useTranslation('company');
  const [serverError, setServerError] = useState('');
  const [location, setLocation] = useState('');
  const [name, setName] = useState('');
  const handleNameChange = (e) => setName(e.target.value);
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const requiredFields = ['geometry', 'locality', 'postal_code', 'route', 'street_number'];
      const locationKeys = Object.keys(location);
      for (const field of requiredFields) {
        if (!locationKeys.includes(field)) {
          throw Error('Please provide more detailed info in address input. Missing: ' + field);
        }
      }

      const newLocation = {
        name,
        coordinates: {
          x: location.geometry.location.lat,
          y: location.geometry.location.lng,
        },
        city: location.locality,
        postcode: location.postal_code,
        street: location.route,
        building_number: location.street_number,
      };
      console.log(newLocation);
      const createdLocation = await api.company.addLocation(newLocation);
      onAdd(createdLocation);
    } catch (err) {
      console.log(err);
      const resMsg = err?.response?.data?.message || err.message;
      const message = Array.isArray(resMsg)
        ? resMsg.map((el, key) => <div key={key}>{el}</div>)
        : resMsg;
      setServerError(message);
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <Card style={{ width: 400, height: 400, margin: 5 }}>
        <CardContent>
          <Box textAlign="center" py={3}>
            {t('addLocation')}
          </Box>
          <Box py={2}>
            <TextField
              label={t('locationName')}
              onChange={handleNameChange}
              value={name}
              variant="outlined"
              fullWidth
            />
          </Box>
          <LocationAutocomplete onChange={setLocation} label={t('address')} />
          <Box textAlign="center" py={2}>
            <Button type="submit" variant="contained">
              {t('add')}
            </Button>
          </Box>
          {serverError && <Alert severity="error">{serverError}</Alert>}
        </CardContent>
      </Card>
    </form>
  );
}

export default CompanyLocationForm;
