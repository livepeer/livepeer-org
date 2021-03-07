import { ThemeProvider } from "theme-ui";
import theme from "lib/theme";
import "css/global.css";
import "keen-slider/keen-slider.min.css";
import initGsap from "lib/animations";
import * as gtag from "../lib/gtag";
import { useEffect } from "react";
import Router from "next/router";
import { appWithTranslation } from "next-i18next";

initGsap();

const App = ({ Component, pageProps }) => {
  useEffect(() => {
    const handleRouteChange = (url: string) => {
      gtag.pageview(url);
    };
    Router.events.on("routeChangeComplete", handleRouteChange);
    return () => {
      Router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
};

export default appWithTranslation(App);
