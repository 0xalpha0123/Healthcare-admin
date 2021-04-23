import { Container } from "@material-ui/core";

import MenuItem from "./MenuItem";

const Sidebar = ({ menuItems, currentUrl }) => {
  return (
    <Container>
      {menuItems.map((item) => (
        <MenuItem item={item} activeUrl={currentUrl} />
      ))}
      {/* {menuItems.map((item) => (
        <MenuItem item={item} activeUrl={currentUrl} />
      ))}
      {menuItems.map((item) => (
        <MenuItem item={item} activeUrl={currentUrl} />
      ))} */}
    </Container>
  );
};

export default Sidebar;
