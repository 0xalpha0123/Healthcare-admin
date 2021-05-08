import { Box } from '@material-ui/core';
import { Alert } from '@material-ui/lab';
import validation from '../../public/locales/pl/validation.json';

function ValidationAlert({ error }) {
  if (error) {
    return (
      <Box mt={1}>
        <Alert severity="error">{validation.required}</Alert>
      </Box>
    );
  }
  return null;
}

export default ValidationAlert;
