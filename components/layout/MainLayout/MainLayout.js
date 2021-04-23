import { AppBar, Box, Grid } from "@material-ui/core";
import { useRouter } from "next/router";

import Navbar from "../../ui/Navbar";
import Sidebar from "../../ui/Sidebar";

const MainLayout = ({ children }) => {
  const router = useRouter();

  return (
    <Box className="MainLayout">
      <AppBar position="sticky">
        <Navbar />
      </AppBar>
      <Grid container className="PageContent__wrapper">
        <Grid item md={4} lg={2} className="Sidebar_wrapper">
          <Sidebar currentUrl={router.pathname} />
        </Grid>
        <Grid item md={8} lg={10}>
          <main>{children}</main>
        </Grid>
      </Grid>
    </Box>
  );
};

export default MainLayout;
