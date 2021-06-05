import { useTranslation } from 'next-i18next';
import { Container } from '@material-ui/core';
import {
  Business,
  PhotoLibrary,
  LocationOn,
  Edit,
  PostAdd,
  List,
  Payment,
  People,
} from '@material-ui/icons';

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
      <SidebarItem
        url="/offers/add"
        currentUrl={currentUrl}
        label={t('offersAdd')}
        icon={<PostAdd fontSize="large" />}
      />
      <SidebarItem
        url="/offers"
        currentUrl={currentUrl}
        label={t('offers')}
        icon={<List fontSize="large" />}
      />
      <SidebarItem
        url="/candidates"
        currentUrl={currentUrl}
        label={t('candidates')}
        icon={<People fontSize="large" />}
      />
      <SidebarItem
        url="/payments"
        currentUrl={currentUrl}
        label={t('payments')}
        icon={<Payment fontSize="large" />}
      />
    </Container>
  );
};

export default Sidebar;
