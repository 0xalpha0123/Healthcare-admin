import Paper from "@material-ui/core/Paper";
import { Grid } from "@material-ui/core";
import { useRouter } from "next/router";
import MenuItem from "./MenuItem/MenuItem";

const Sidebar = ({ menuItems, activeUrl }) => {
  const router = useRouter();

  return (
    <Grid
      container
      direction="column"
      justify="center"
      spacing={3}
      className="Sidebar"
    >
      {menuItems.map((item) => (
        <MenuItem item={item} activeUrl={router.pathname} />
      ))}
    </Grid>
  );
};

export default Sidebar;
