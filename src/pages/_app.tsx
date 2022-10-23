import "@fontsource/roboto";
import React from "react";
import Head from "../../node_modules/next/head";
import "../styles/globals.css";

function MyApp({ Component, pageProps }: any) {
  return (
    <>
      <Head>
        <meta name="title" content="U2F" />
        <meta
          name="description"
          content="A collection of sites that support hardware U2F tokens"
        />
        <title>U2F</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
