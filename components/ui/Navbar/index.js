import { useRouter } from 'next/router';
import { useTranslation } from 'next-i18next';
import { Box, Button, Link, Toolbar } from '@material-ui/core';

const Navbar = () => {
  const router = useRouter();
  const { t } = useTranslation('navigation');

  const handleLogoutClick = () => {
    document.cookie =
      'authorization=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';

    router.push('/auth');
  };

  return (
    <Toolbar className="Navbar">
      <Box height={60} my={1} mx={2} className="Navbar__imageContainer">
        <Link href="/">
          <img src="/assets/logo/logo.png" />
        </Link>
      </Box>
      <Box>
        <Button className="Navbar__button" color="inherit">
          {t('myAccount')}
        </Button>
        <Button
          onClick={handleLogoutClick}
          className="Navbar__button"
          color="inherit"
        >
          {t('logout')}
        </Button>
      </Box>
    </Toolbar>
  );
};

export default Navbar;
