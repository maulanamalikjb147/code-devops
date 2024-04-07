import React from 'react';

import { Global } from '@emotion/react';

import { globalStyles } from '@/utils/styles/global.styles';

import type { AppProps } from 'next/app';
import type { NextPage } from 'next';

type AppPropsWithLayout = AppProps & { Component: NextPageWithLayout };

type NextPageWithLayout = NextPage & { getLayout?: (page: React.ReactElement) => React.ReactNode };

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => page);

  return getLayout(
    <>
      <Global styles={globalStyles} />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
