import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Test from "../components/Test";

export default function Home() {
  return <Test />;
}

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ["common"])),
  },
});
