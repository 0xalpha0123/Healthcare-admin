import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import MainLayout from "../components/layout/MainLayout/MainLayout";
import api from "../api";

const Home = () => {
  return <MainLayout></MainLayout>;
};

export default Home;

export const getServerSideProps = async (ctx) => {
  // try {
  //   await api.auth.getIsAuth(ctx);
  // } catch (err) {
  //   return {
  //     redirect: {
  //       destination: "/auth",
  //       permanent: false,
  //     },
  //   };
  // }
  return {
    props: {
      ...(await serverSideTranslations(ctx.locale, ["menu", "navbar"])),
    },
  };
};
