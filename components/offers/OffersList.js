import { useTranslation } from 'next-i18next';
import {
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Paper,
  Button,
  Box,
  Grid,
} from '@material-ui/core';
import Link from 'next/link';
function OffersList({ offers }) {
  const { t } = useTranslation('offers');

  const headers = [
    'no.',
    'title',
    'salary',
    'active',
    'paid_till',
    'updated_at',
    'actions',
  ].map((el) => t(el));
  return (
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
          {offers.map((offer, key) => (
            <TableRow key={offer.id}>
              <TableCell component="th" scope="row">
                {key + 1}
              </TableCell>
              <TableCell>{offer.title}</TableCell>
              <TableCell>
                {offer.salary_from} {t('currency')} - {offer.salary_to} {t('currency')}
              </TableCell>
              <TableCell>{offer.active ? t('yes') : t('no')}</TableCell>
              <TableCell>
                {offer.paid_till ? new Date(offer.paid_till).toLocaleString('pl') : t('notPaid')}
              </TableCell>
              <TableCell>{new Date(offer.updated_at).toLocaleString('pl')}</TableCell>
              <TableCell>
                <Grid container>
                  <Box mr={1}>
                    <Link href={'/offers/' + offer.id}>
                      <Button variant="contained" color="primary">
                        {t('edit')}
                      </Button>
                    </Link>
                  </Box>
                  <Box mr={1}>
                    <Link href={'/candidates?offer_id=' + offer.id}>
                      <Button variant="contained" color="primary">
                        {t('candidates')}
                      </Button>
                    </Link>
                  </Box>
                  <Box>
                    <Link href={`/payments/new?offer_id=${offer.id}`}>
                      <Button variant="contained" color="primary">
                        {t('pay')}
                      </Button>
                    </Link>
                  </Box>
                </Grid>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
export default OffersList;
