import Image from "next/image";
import { makeStyles } from "@material-ui/core/styles";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { Grid, Link } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

const Header = () => {
  const classes = useStyles();

  return (
    <Toolbar className="Header">
      <Grid item xs={3} className="Header__imageContainer">
        <Link href="/">
          <img className="Header__image" src="/assets/logo.png" />
        </Link>
      </Grid>
      <Grid item xs={9}></Grid>
      <Grid item xs={3}>
        <Button className="Header__button" color="inherit">
          My account
        </Button>
        <Button color="inherit">Logout</Button>
      </Grid>
    </Toolbar>
  );
};

export default Header;
