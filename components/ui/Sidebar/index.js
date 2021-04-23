import { useTranslation } from "next-i18next";
import { Container } from "@material-ui/core";

import MenuItem from "./MenuItem";

const Sidebar = ({ currentUrl }) => {
  const { t } = useTranslation("menu");
  
  return (
    <Container>
      <MenuItem
        url="/"
        activeUrl={currentUrl}
        label={t("offers")}
        image="https://bi.im-g.pl/im/52/b2/14/z21700946IER,Shrek.jpg"
      />
      <MenuItem
        url="/offer/add"
        activeUrl={currentUrl}
        label={t("addOffer")}
        image="https://bi.im-g.pl/im/52/b2/14/z21700946IER,Shrek.jpg"
      />
      <MenuItem
        url="/locations"
        activeUrl={currentUrl}
        label={t("locations")}
        image="https://bi.im-g.pl/im/52/b2/14/z21700946IER,Shrek.jpg"
      />
    </Container>
  );
};

export default Sidebar;
