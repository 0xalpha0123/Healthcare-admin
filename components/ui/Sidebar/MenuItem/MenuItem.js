import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import { Grid } from "@material-ui/core";

const MenuItem = ({ item, activeUrl }) => (
  <Grid item>
    <a href={item.url}>
      <Paper
        square
        className={
          activeUrl === item.url
            ? "MenuItem__button MenuItem__button_active"
            : "MenuItem__button"
        }
        // className={classes.paper}
      >
        <Grid container justify="center">
          <Grid item md={8}>
            <img alt={item.label} src={item.imageUrl} width={"100%"} />
          </Grid>
          <Grid item md={8}>
            <p className="Menu__label">{item.label}</p>
          </Grid>
        </Grid>
      </Paper>
    </a>
  </Grid>
);

export default MenuItem;
