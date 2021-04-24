import { AppBar, Box, Grid } from '@material-ui/core';
import { useRouter } from 'next/router';

import Navbar from '../../ui/Navbar';
import Sidebar from '../../ui/Sidebar';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  mainLayout: {
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
  },
  wrapper: {
    flexGrow: 1,
  },
  sidebarWrapper: {
    boxShadow: '2px 0px 6px 0px rgba(0, 0, 0, 0.1)',
  },
});

const MainLayout = ({ children }) => {
  const router = useRouter();
  const classes = useStyles();

  return (
    <Box className={classes.mainLayout}>
      <AppBar position="sticky">
        <Navbar />
      </AppBar>
      <Grid container className={classes.wrapper}>
        <Grid item md={4} lg={2} className={classes.sidebarWrapper}>
          <Sidebar currentUrl={router.pathname} />
        </Grid>
        <Grid item md={8} lg={10}>
          <Box p={4}>{children}</Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default MainLayout;
