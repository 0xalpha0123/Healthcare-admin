import { AppBar, Box, Grid } from "@material-ui/core";
import { useRouter } from "next/router";

import Navbar from "../../ui/Navbar";
import Sidebar from "../../ui/Sidebar";

// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {
//   faCog,
//   faBroom,
//   faMinusSquare,
//   faPlusSquare,
//   faFileImport,
// } from "@fortawesome/free-solid-svg-icons";

const menuElements = [
  {
    label: "Lokalizacje",
    url: "/locations",
    icon: "icon",
    imageUrl: "https://bi.im-g.pl/im/52/b2/14/z21700946IER,Shrek.jpgg",
  },
  {
    label: "Ogłoszenia",
    url: "/",
    icon: "#image#",
    imageUrl: "https://bi.im-g.pl/im/52/b2/14/z21700946IER,Shrek.jpgg",
  },
  // {
  //   label: "Dodaj ogłoszenie",
  //   url: "/add-offer",
  //   icon: "#image#",
  //   imageUrl: "https://bi.im-g.pl/im/52/b2/14/z21700946IER,Shrek.jpgg",
  // },
];

const MainLayout = ({ children }) => {
  const router = useRouter();

  return (
    <Box>
      <AppBar position="sticky">
        <Navbar />
      </AppBar>
      <Grid container>
        <Grid item md={6} lg={3} className="Sidebar_wrapper">
          <Sidebar currentUrl={router.pathname} menuItems={menuElements} />
        </Grid>
        <Grid item md={6} lg={9}>
          <main>{children}</main>
        </Grid>
      </Grid>
    </Box>
  );
};

export default MainLayout;
