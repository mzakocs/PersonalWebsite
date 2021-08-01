import React, { useEffect } from "react";
import Head from "next/head";
import Navigation from "./Navigation";
import Footer from "./Footer";
import { initGA, logPageView } from "../util/analytics";
import { Person } from "schema-dts";
import { jsonLdScriptProps } from "react-schemaorg";

// Base layout used on every page. Includes the navigation bar on the top and
// a footer at the bottom, along with a dark background surrounding the children
const Base = ({ children, title, blog, structuredData }) => {
  useEffect(() => {
    // Loads Google Analytics
    if (!window.GA_INITIALIZED) {
      initGA();
      window.GA_INITIALIZED = true;
    }
    logPageView();
  }, []);
  return (
    <>
      <style jsx>{`
        @keyframes fadeIn {
          0% {
            opacity: 0;
          }
          100% {
            opacity: 1;
          }
        }
        main {
          animation: fadeIn ease 2s;
        }
      `}</style>
      <Head>
        {/* Structured Data for SEO */}
        {/* https://technicalseo.com/tools/schema-markup-generator/ */}
        <script
          {...jsonLdScriptProps (structuredData || {})}
        />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <title>{title}</title>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />
        <script src="/js/three.min.js"></script>s
        <script src="/js/anime.min.js"></script>
        <script src="/js/spline.runtime.min.js"></script>
      </Head>
      <Navigation />
      <main className={blog ? "blogContainer" : "container"}>{children}</main>
      <Footer />
    </>
  );
};

export default Base;
