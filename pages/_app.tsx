import React from "react";
import App from "next/app";
import { AppProps } from "next/app";
import "../styles/globals.css";

const Noop: React.ElementType = ({ children }) => children;

export default class MyApp extends App<
  AppProps & { Component: { Layout: React.FC | React.ElementType } }
> {
  render() {
    const { Component, pageProps } = this.props;
    const Layout = Component.Layout || Noop;

    return (
      <Layout>
        <Component {...pageProps} />
      </Layout>
    );
  }
}
