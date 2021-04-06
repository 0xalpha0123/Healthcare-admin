import { useTranslation } from "next-i18next";

function Test() {
  const { t } = useTranslation("common");
  return <div>{t("save")}</div>;
}

export default Test;
