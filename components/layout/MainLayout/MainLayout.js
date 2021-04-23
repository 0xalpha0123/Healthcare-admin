import { makeStyles } from "@material-ui/core/styles";
import { AppBar, Box, Grid } from "@material-ui/core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCog,
  faBroom,
  faMinusSquare,
  faPlusSquare,
  faFileImport,
} from "@fortawesome/free-solid-svg-icons";

import Header from "../../ui/Header/Header";
import Sidebar from "../../ui/Sidebar/Sidebar";

const menuElements = [
  {
    label: "Lista ogłoszeń",
    url: "/",
    icon: <FontAwesomeIcon icon={faBroom} />,
    imageUrl: "https://bi.im-g.pl/im/52/b2/14/z21700946IER,Shrek.jpgg",
  },
  {
    label: "Dodaj ogłoszenie",
    url: "/add-offer",
    icon: <FontAwesomeIcon icon={faBroom} />,
    imageUrl: "https://bi.im-g.pl/im/52/b2/14/z21700946IER,Shrek.jpgg",
  },
  {
    label: "Konto",
    url: "/account",
    icon: <FontAwesomeIcon icon={faBroom} />,
    imageUrl: "https://bi.im-g.pl/im/52/b2/14/z21700946IER,Shrek.jpgg",
  },
];

const MainLayout = ({ children }) => {
  const currentUrl = "";

  return (
    <Box>
      <AppBar position="static">
        <Header />
      </AppBar>
      <Grid container spacing={3}>
        <Grid item lg={3}>
          <Sidebar menuItems={menuElements} />
        </Grid>
        <Grid item lg={9}>
          <main>{children}</main>
        </Grid>
      </Grid>
    </Box>
  );
};

export default MainLayout;
