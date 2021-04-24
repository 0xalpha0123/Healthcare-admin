import '../styles/globals.css';

import { appWithTranslation } from 'next-i18next';
import { useRouter } from 'next/router';

import MainLayout from '../components/layout/MainLayout/MainLayout';

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  if (router.pathname === '/auth') {
    return <Component {...pageProps} />;
  }

  return (
    <MainLayout>
      <Component {...pageProps} />
    </MainLayout>
  );
}

export default appWithTranslation(MyApp);
