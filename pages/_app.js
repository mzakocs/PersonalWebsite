import "../styles/globals.css";
import React from "react";

// Credit to styfle (https://styfle.dev/) for CSS files and design inspiration
// His repo was a great resource for Next.js & React development

function MyApp({ Component, pageProps }) {
  // Initialize the app
  return (
      <Component {...pageProps} />
  );
}

export default MyApp;
