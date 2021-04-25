import axios from 'axios';

export default async function handler(req, res) {
  const { data } = await axios.get('https://maps.googleapis.com/maps/api/place/details/json', {
    params: { ...req.query, fields: 'geometry,address_components,name', language: 'pl' },
  });
  res.json(data);
}
