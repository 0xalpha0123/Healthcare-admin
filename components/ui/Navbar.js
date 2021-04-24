import { useRouter } from 'next/router';
import { useTranslation } from 'next-i18next';
import { Box, Button, Link, Toolbar } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  toolbar: {
    display: 'flex',
    justifyContent: 'space-between',
    backgroundColor: '#fff',
  },
});

const Navbar = () => {
  const router = useRouter();
  const { t } = useTranslation('navigation');
  const classes = useStyles();

  const handleLogoutClick = () => {
    document.cookie = 'authorization=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';

    router.push('/auth');
  };

  return (
    <Toolbar className={classes.toolbar}>
      <Box height={60} p={1} className="Navbar__imageContainer">
        <Link href="/">
          <img src="/assets/logo.png" />
        </Link>
      </Box>
      <Box display="flex">
        <Box m={1}>
          <Button variant="contained">{t('myAccount')}</Button>
        </Box>
        <Box m={1}>
          <Button variant="contained" onClick={handleLogoutClick}>
            {t('logout')}
          </Button>
        </Box>
      </Box>
    </Toolbar>
  );
};

export default Navbar;
