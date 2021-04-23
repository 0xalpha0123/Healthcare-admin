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
        image="/assets/icons/reorder_black_24dp.svg"
      />
      <MenuItem
        url="/offer/add"
        activeUrl={currentUrl}
        label={t("addOffer")}
        image="/assets/icons/add_circle_outline_black_24dp.svg"
      />
      <MenuItem
        url="/locations"
        activeUrl={currentUrl}
        label={t("locations")}
        image="/assets/icons/public_black_24dp.svg"
      />
    </Container>
  );
};

export default Sidebar;
