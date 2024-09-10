import '@/fonts/Inter-4.0/web/inter.css'
import '@/styles/globals.css'
import React from 'react';
import {ConfigProvider} from 'antd';
import type {AppProps} from 'next/app';

import Layout from "@/components/Layout";
import theme from "@/theme/themeConfig";

const App = ({Component, pageProps}: AppProps) => (
  <ConfigProvider theme={theme}>
    <Layout>
      <Component {...pageProps} />
    </Layout>
  </ConfigProvider>
);

export default App;

