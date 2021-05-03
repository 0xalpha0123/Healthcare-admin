import Auth from './Auth';
import Candidates from './Candidates';
import Company from './Company';
import Offers from './Offers';
import Payments from './Payments';

export default {
  auth: new Auth(),
  candidates: new Candidates(),
  company: new Company(),
  offers: new Offers(),
  payments: new Payments(),
};
