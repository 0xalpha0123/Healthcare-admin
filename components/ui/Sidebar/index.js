import { useTranslation } from 'next-i18next';
import { Container } from '@material-ui/core';
import { Business } from '@material-ui/icons';

import SidebarItem from './SidebarItem';

const Sidebar = ({ currentUrl }) => {
  const { t } = useTranslation('navigation');

  return (
    <Container>
      <SidebarItem
        url="/company"
        currentUrl={currentUrl}
        label={t('company')}
        icon={<Business fontSize="large" />}
      />
    </Container>
  );
};

export default Sidebar;
