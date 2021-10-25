import { AppProps } from 'next/app';

import Layout from '@components/common/layout';

import '@styles/main.css';

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}
