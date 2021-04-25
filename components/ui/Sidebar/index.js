import { useTranslation } from 'next-i18next';
import { Container } from '@material-ui/core';
import { Business, PhotoLibrary, LocationOn, Edit } from '@material-ui/icons';

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
      <SidebarItem
        url="/company/edit"
        currentUrl={currentUrl}
        label={t('companyEdit')}
        icon={<Edit fontSize="large" />}
      />
      <SidebarItem
        url="/company/edit-photos"
        currentUrl={currentUrl}
        label={t('companyEditPhotos')}
        icon={<PhotoLibrary fontSize="large" />}
      />
      <SidebarItem
        url="/company/edit-locations"
        currentUrl={currentUrl}
        label={t('companyEditLocations')}
        icon={<LocationOn fontSize="large" />}
      />
    </Container>
  );
};

export default Sidebar;
