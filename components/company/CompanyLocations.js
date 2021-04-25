import { Box, Card, CardContent } from '@material-ui/core';
import { Delete } from '@material-ui/icons';

import { useState } from 'react';
import CompanyLocationForm from './CompanyLocationForm';
import { useTranslation } from 'next-i18next';

function CompanyLocations({ locations: initLocations, mode }) {
  const { t } = useTranslation('company');

  const [locations, setLocations] = useState([...initLocations]);
  const addHandler = (location) => {
    setLocations([...locations, location]);
  };
  const item = (location, key) => (
    <Card style={{ width: 400, height: 400, margin: 5 }} key={key}>
      <CardContent>
        <Box textAlign="center" py={3} variant="h5">
          {location.name}
        </Box>
        <Box>{location.city}</Box>
        <Box>
          {location.street} {location.building_number}
        </Box>
        <Box>
          {location.postcode} {location.city}
        </Box>
      </CardContent>
    </Card>
  );
  return (
    <Box>
      <Box display="flex">
        {locations.map(item)}
        {mode === 'edit' && <CompanyLocationForm onAdd={addHandler} />}
      </Box>
    </Box>
  );
}

export default CompanyLocations;
