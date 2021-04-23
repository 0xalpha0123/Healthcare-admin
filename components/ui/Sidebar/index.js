import { useTranslation } from "next-i18next";
import { Container } from "@material-ui/core";

import MenuItem from "./MenuItem";

const Sidebar = ({ currentUrl }) => {
  const { t } = useTranslation("menu");

  return (
    <Container>
      <MenuItem
        url="/"
        currentUrl={currentUrl}
        label={t("offers")}
        image="/assets/icons/reorder_black_24dp.svg"
      />
      <MenuItem
        url="/offer/add"
        currentUrl={currentUrl}
        label={t("addOffer")}
        image="/assets/icons/add_circle_outline_black_24dp.svg"
      />
      <MenuItem
        url="/locations"
        currentUrl={currentUrl}
        label={t("locations")}
        image="/assets/icons/public_black_24dp.svg"
      />
    </Container>
  );
};

export default Sidebar;
