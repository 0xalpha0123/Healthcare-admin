import { useTranslation } from 'next-i18next';
import { Container } from '@material-ui/core';
import ListIcon from '@material-ui/icons/List';
import ControlPointIcon from '@material-ui/icons/ControlPoint';
import PublicIcon from '@material-ui/icons/Public';

import MenuItem from './MenuItem';

const Sidebar = ({ currentUrl }) => {
  const { t } = useTranslation('navigation');

  return (
    <Container>
      <MenuItem
        url="/"
        currentUrl={currentUrl}
        label={t('offers')}
        image="/assets/icons/reorder_black_24dp.svg"
        icon={<ListIcon className="MenuItem__icon" />}
      />
      <MenuItem
        url="/offer/add"
        currentUrl={currentUrl}
        label={t('addOffer')}
        icon={<ControlPointIcon className="MenuItem__icon" />}
      />
      <MenuItem
        url="/locations"
        currentUrl={currentUrl}
        label={t('locations')}
        icon={<PublicIcon className="MenuItem__icon" />}
      />
    </Container>
  );
};

export default Sidebar;
