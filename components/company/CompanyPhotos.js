import { Box, Card, Typography, Divider, Button } from '@material-ui/core';
import { Alert } from '@material-ui/lab';
import { Delete, Add } from '@material-ui/icons';
import { useEffect, useState } from 'react';
import api from '../../api';
function CompanyPhotos({ photos: initPhotos, mode }) {
  const [serverError, setServerError] = useState('');
  const [photos, setPhotos] = useState([]);
  useEffect(() => setPhotos([...initPhotos]), [initPhotos]);
  const item = (photo, key) => (
    <Card
      key={key}
      style={{
        backgroundImage: `url(${photo.file_path})`,
        backgroundSize: 'cover',
        width: '200px',
        height: '200px',
        margin: '5px',
      }}
    >
      {mode === 'edit' && (
        <Box
          bgcolor="white"
          p={1}
          width="40px"
          height="40px"
          style={{ cursor: 'pointer' }}
          onClick={() => deleteFile(photo.id)}
        >
          <Delete />
        </Box>
      )}
    </Card>
  );
  const addFile = async (e) => {
    try {
      const photo = await api.company.addPhoto(e.target.files[0]);
      setPhotos([...photos, photo]);
      setServerError('');
    } catch (err) {
      const resMsg = err?.response?.data?.message || 'Unexpected error';
      const message = Array.isArray(resMsg)
        ? resMsg.map((el, key) => <div key={key}>{el}</div>)
        : resMsg;
      setServerError(message);
    }
  };
  const deleteFile = async (id) => {
    try {
      await api.company.deletePhoto(id);
      setPhotos(photos.filter((el) => el.id !== id));
    } catch (err) {
      const resMsg = err?.response?.data?.message || 'Unexpected error';
      const message = Array.isArray(resMsg)
        ? resMsg.map((el, key) => <div key={key}>{el}</div>)
        : resMsg;
      setServerError(message);
    }
  };
  return (
    <Box pt={4}>
      <Typography>Galeria</Typography>
      <Box py={1}>
        <Divider />
      </Box>
      <Box display="flex" flexWrap="wrap" py={2}>
        {photos.map(item)}
        {mode === 'edit' && (
          <Card style={{ width: '200px', height: '200px', margin: '5px' }}>
            <Button
              startIcon={<Add fontSize="large" />}
              style={{ width: '200px', height: '200px' }}
              component="label"
            >
              <input type="file" hidden onChange={addFile} />
            </Button>
          </Card>
        )}
      </Box>
      {serverError && <Alert severity="error">{serverError}</Alert>}
    </Box>
  );
}

export default CompanyPhotos;
