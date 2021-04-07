import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import SignIn from "../components/auth/SignIn";
function AuthPage() {
  return <SignIn />;
}

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ["auth"])),
  },
});

export default AuthPage;
