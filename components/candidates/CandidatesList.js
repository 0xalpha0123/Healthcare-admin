import {
  Box,
  TextField,
  MenuItem,
  Card,
  CardContent,
  TableContainer,
  Table,
  TableCell,
  TableBody,
  TableHead,
  TableRow,
  Button,
  Paper,
} from '@material-ui/core';
import { useTranslation } from 'next-i18next';
import { useEffect, useState } from 'react';
import api from '../../api';

function CandidatesList({ offers, initCandidates = [], initOfferId = '' }) {
  const { t } = useTranslation('candidates');
  const [candidates, setCandidates] = useState(initCandidates);
  const [offerId, setOfferId] = useState(initOfferId);

  const handleOfferChange = async (e) => {
    const offerId = e.target.value;
    const fetchedCandidates = await api.candidates.getCandidates(null, offerId);
    setOfferId(offerId);
    setCandidates([...fetchedCandidates]);
  };

  const headers = ['no.', 'fullName', 'message', 'cv', 'created_at'].map((el) => t(el));

  const content = candidates.length ? (
    <TableContainer component={Paper}>
      <Table size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            {headers.map((el, key) => (
              <TableCell key={key}>{el}</TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {candidates.map((candidate, key) => (
            <TableRow key={candidate.id}>
              <TableCell component="th" scope="row">
                {key + 1}
              </TableCell>
              <TableCell>
                {candidate.first_name} {candidate.last_name}
              </TableCell>
              <TableCell>
                <Box
                  maxWidth={700}
                  whiteSpace="pre-line"
                  my={2}
                  dangerouslySetInnerHTML={{ __html: candidate.message }}
                ></Box>
              </TableCell>
              <TableCell>
                <a href={candidate.cv_file_path} download>
                  <Button color="primary" variant="contained">
                    {t('downloadCv')}
                  </Button>
                </a>
              </TableCell>
              <TableCell>{new Date(candidate.created_at).toLocaleString('pl')}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  ) : (
    <Card>
      <CardContent>{t('noCandidates')}</CardContent>
    </Card>
  );

  return (
    <Card>
      <CardContent>
        <Box pb={4} maxWidth={600}>
          <TextField
            select
            label={t('offer')}
            fullWidth
            value={offerId}
            onChange={handleOfferChange}
          >
            {offers.map((option) => (
              <MenuItem key={option.id} value={option.id}>
                {option.title} ( {option.salary_from} {t('currency')} - {option.salary_to}{' '}
                {t('currency')})
              </MenuItem>
            ))}
          </TextField>
        </Box>
        {content}
      </CardContent>
    </Card>
  );
}

export default CandidatesList;
