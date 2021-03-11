import Head from 'next/head';

import React from 'react';

const HeadConfig = ({ title }) => {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/head/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/head/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/head/favicon-16x16.png"
        />
        <link rel="manifest" href="/head/site.webmanifest" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />
      </Head>
    </div>
  );
};

export default HeadConfig;
