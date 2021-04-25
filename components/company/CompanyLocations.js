import { Box, Card, CardContent, Typography, Grid, Divider } from '@material-ui/core';
import { Alert } from '@material-ui/lab';
import { Delete } from '@material-ui/icons';

import { useState } from 'react';
import CompanyLocationForm from './CompanyLocationForm';
import { useTranslation } from 'next-i18next';
import dynamic from 'next/dynamic';
import api from '../../api';

function CompanyLocations({ locations: initLocations, mode }) {
  const Map = dynamic(() => import('../ui/Map'), { ssr: false });
  const { t } = useTranslation('company');
  const [locations, setLocations] = useState([...initLocations]);
  const [serverError, setServerError] = useState('');
  const addHandler = (location) => {
    setLocations([...locations, location]);
  };

  const deleteLocation = async (id) => {
    try {
      await api.company.deleteLocation(id);
      setLocations(locations.filter((el) => el.id !== id));
    } catch (err) {
      const resMsg = err?.response?.data?.message || err.message;
      const message = Array.isArray(resMsg)
        ? resMsg.map((el, key) => <div key={key}>{el}</div>)
        : resMsg;
      setServerError(message);
    }
  };
  const item = (location, key) => (
    <Card style={{ width: 400, height: 400, margin: 5 }} key={key}>
      <CardContent>
        <Box textAlign="center" py={3} variant="h5">
          {location.name}
        </Box>
        <Grid container>
          <Grid item xs={6}>
            <Box>{location.city}</Box>
            <Box>
              {location.street} {location.building_number}
            </Box>
            <Box>
              {location.postcode} {location.city}
            </Box>
          </Grid>
          <Grid item xs={6}>
            {mode === 'edit' && (
              <Box
                ml="auto"
                p={1}
                width="40px"
                height="40px"
                style={{ cursor: 'pointer' }}
                onClick={() => deleteLocation(location.id)}
              >
                <Delete />
              </Box>
            )}
          </Grid>
        </Grid>

        <Box style={{ height: 250, width: '100%' }} py={4}>
          <Map point={location.coordinates} />
        </Box>
        {serverError && <Alert severity="error">{serverError}</Alert>}
      </CardContent>
    </Card>
  );
  return (
    <Box>
      <Typography>{t('locations')}</Typography>
      <Box py={1}>
        <Divider />
      </Box>
      <Box display="flex" flexWrap="wrap">
        {locations.map(item)}
        {mode === 'edit' && <CompanyLocationForm onAdd={addHandler} />}
      </Box>
      {serverError && <Alert severity="error">{serverError}</Alert>}
    </Box>
  );
}

export default CompanyLocations;
