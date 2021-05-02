import {
  Card,
  CardContent,
  TableContainer,
  Table,
  TableCell,
  TableBody,
  TableHead,
  TableRow,
  Paper,
} from '@material-ui/core';
import { useTranslation } from 'next-i18next';
function PaymentsList({ payments }) {
  const { t } = useTranslation('payments');

  const headers = [
    'no.',
    'title',
    'offerTitle',
    'amount',
    'status',
    'extension_days',
    'created_at',
  ].map((el) => t(el));

  const content = payments.length ? (
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
          {payments.map((payment, key) => (
            <TableRow key={payment.id}>
              <TableCell component="th" scope="row">
                {key + 1}
              </TableCell>
              <TableCell>{payment.title}</TableCell>
              <TableCell>{payment.offer.title}</TableCell>
              <TableCell>
                {Number(payment.amount).toFixed(2)} {t('currency')}
              </TableCell>
              <TableCell>{t(payment.status)}</TableCell>
              <TableCell>
                {t(payment.extension_days)} {t('days')}
              </TableCell>
              <TableCell>{new Date(payment.created_at).toLocaleString('pl')}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  ) : (
    <Card>
      <CardContent>{t('noPayments')}</CardContent>
    </Card>
  );
  return content;
}

export default PaymentsList;
