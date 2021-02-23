/* eslint-disable react/prop-types */
import React from 'react';
import '~styles/globals.css';

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const MyApp = ({ Component, pageProps }): React.ReactElement => {
  return <Component {...pageProps} />;
};

export default MyApp;
