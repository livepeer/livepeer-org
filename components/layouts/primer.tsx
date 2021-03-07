import Head, { HeadProps } from "components/primitives/head";
import Nav, { NavProps } from "components/sections/nav";
import { Box, SxStyleProp } from "theme-ui";
import { FC } from "react";

type Props = {
  headProps?: HeadProps;
  isDark?: boolean;
  navProps?: NavProps;
  pushContentSx?: SxStyleProp;
};

const PageLayout: FC<Props> = ({
  children,
  headProps,
  isDark,
  navProps,
  pushContentSx,
}) => (
  <>
    <Head {...headProps} />
    <Nav
      isPrimer
      {...(navProps ? navProps : { background: isDark ? "black" : "white" })}
    />
    <Box
      as="main"
      sx={{ position: "relative", overflow: "hidden", ...pushContentSx }}>
      {children}
    </Box>
    <style global jsx>{`
      @font-face {
        font-family: "agrandir";
        src: url("/fonts/agrandir-grandlight-webfont.woff2") format("woff2"),
          url("/fonts/agrandir-grandlight-webfont.woff") format("woff");
        font-weight: 100;
        font-style: normal;
      }

      @font-face {
        font-family: "agrandir";
        src: url("/fonts/agrandir-regular-webfont.woff2") format("woff2"),
          url("/fonts/agrandir-regular-webfont.woff") format("woff");
        font-weight: normal;
        font-style: normal;
      }

      @font-face {
        font-family: "agrandir_tight";
        src: url("/fonts/agrandir-tight-webfont.woff2") format("woff2"),
          url("/fonts/agrandir-tight-webfont.woff") format("woff");
        font-weight: normal;
        font-style: normal;
      }

      .primer {
        font-family: agrandir;
        font-size: 18px;
        line-height: 28px;
      }
      .primer h1,
      .primer h2,
      .primer h3,
      .primer h4,
      .primer h5,
      .primer h6 {
        font-weight: normal;
        font-family: agrandir;
        margin-top: 0;
      }

      .primer h2 {
        font-weight: lighter;
      }

      .primer__heading {
        font-size: 28px;
        line-height: 38px;
        margin-bottom: 16px;
      }

      .primer p {
        margin-bottom: 32px;
        margin-top: 0;
      }

      .primer strong {
        font-size: 16px;
      }

      .primer .bg {
        transition: background-color 0.6s;
        background-color: #97f2ef;
        width: 100vw;
        position: fixed;
        height: 100vh;
        left: 0;
        right: 0;
        bottom: 0;
        top: 0;
        z-index: 0;
      }
      .primer .introduction {
        background-color: #97f2ef;
        transition: background-color 0.6s;
      }
      .primer .chapter1 {
        background-color: #ffca71;
        transition: background-color 0.6s;
      }
      .primer .chapter3 {
        background-color: #95f58c;
        transition: background-color 0.6s;
      }
      .primer .chapter4 {
        background-color: #a6adeb;
        transition: background-color 0.6s;
      }
      .primer .chapter5 {
        background-color: #d4b9e4;
        transition: background-color 0.6s;
      }
      .primer .chapter8 {
        background-color: #ffc37b;
        transition: background-color 0.6s;
      }
      .primer .chapter9 {
        background-color: #ffa3a3;
        transition: background-color 0.6s;
      }
    `}</style>
  </>
);

export default PageLayout;
