import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import MainLayout from "../components/layout/MainLayout/MainLayout";

export default function Home() {
  return (
    <div>
      <MainLayout>
        <div>WIELKIE ELO</div>
      </MainLayout>
    </div>
  );
}

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ["common"])),
  },
});
