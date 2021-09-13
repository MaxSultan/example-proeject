import Layout from '@components/Layout';
import React from 'react';
import { AppProps } from 'next/app';

import '@styles/globals.css';

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <Layout {...pageProps.layout}>
      <Component {...pageProps} />
    </Layout>
  );
};

export default App;
