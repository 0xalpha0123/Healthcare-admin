import '../styles/globals.css';

import { appWithTranslation } from 'next-i18next';
import router from 'next/router';
import App from 'next/app';
import MainLayout from '../components/layout/MainLayout/MainLayout';
import api from '../api';

function MyApp({ Component, pageProps, company, hideNavigation }) {
  if (hideNavigation) {
    return <Component {...pageProps} />;
  }
  return (
    <MainLayout>
      <Component {...pageProps} company={company} />
    </MainLayout>
  );
}

MyApp.getInitialProps = async (appCtx) => {
  const appProps = await App.getInitialProps(appCtx);
  const { ctx } = appCtx;
  try {
    if (!ctx.pathname.includes('/auth') && ctx.pathname !== '/no-company') {
      const company = await api.company.getCompanyData(ctx);
      if (!company) {
        redirect('/no-company', ctx);
        return;
      } else {
        return { ...appProps, company };
      }
    } else {
      return { ...appProps, hideNavigation: true };
    }
  } catch (err) {
    redirect('/auth', ctx);
    return;
  }
};

const redirect = (location, ctx) => {
  if (ctx?.req) {
    ctx.res.writeHead(302, { Location: location });
    ctx.res.end();
  } else {
    router.push(location);
  }
};

export default appWithTranslation(MyApp);
