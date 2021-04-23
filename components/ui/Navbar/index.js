import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";
import { Box, Button, Link, Toolbar } from "@material-ui/core";

const Header = () => {
  const router = useRouter();
  const { t } = useTranslation("navbar");

  const handleLogoutClick = () => {
    document.cookie =
      "authorization=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;";

    router.push("/auth");
  };

  return (
    <Toolbar className="Header">
      <Box height={60} mx={9} className="Header__imageContainer">
        <Link href="/">
          <img className="Header__image" src="/assets/logo.png" />
        </Link>
      </Box>
      <Box>
        <Button className="Header__button" color="inherit">
          {t("myAccount")}
        </Button>
        <Button
          onClick={handleLogoutClick}
          className="Header__button"
          color="inherit"
        >
          {t("logout")}
        </Button>
      </Box>
    </Toolbar>
  );
};

export default Header;
