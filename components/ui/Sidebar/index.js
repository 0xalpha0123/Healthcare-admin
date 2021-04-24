import { useTranslation } from 'next-i18next';
import { Container } from '@material-ui/core';
import { ControlPoint, List, Public } from '@material-ui/icons';

import SidebarItem from './SidebarItem';

const Sidebar = ({ currentUrl }) => {
  const { t } = useTranslation('navigation');

  return (
    <Container>
      <SidebarItem
        url="/"
        currentUrl={currentUrl}
        label={t('offers')}
        icon={<List fontSize="large" />}
      />
      <SidebarItem
        url="/offer/add"
        currentUrl={currentUrl}
        label={t('addOffer')}
        icon={<ControlPoint fontSize="large" />}
      />
      <SidebarItem
        url="/locations"
        currentUrl={currentUrl}
        label={t('locations')}
        icon={<Public fontSize="large" />}
      />
    </Container>
  );
};

export default Sidebar;
