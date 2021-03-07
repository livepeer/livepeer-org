/** @jsx jsx */
import {
  jsx,
  Box,
  Container,
  NavLink,
  Link as A,
  IconButton,
  Flex,
  Button,
  Text,
} from "theme-ui";
import LivepeerLogo from "components/svgs/livepeer-logo";
import { useEffect, useCallback, useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import Link from "next/link";
import TopNotification, { TopNotificationProps } from "./top-notification";
import Menu from "components/sections/primer/Menu";
import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";

type LinkType = {
  label: string;
  href: string;
  isExternal?: boolean;
  asPath?: string;
};

const navHeight = "72px";

export type NavProps = {
  isInmersive?: boolean;
  isPrimer?: boolean;
  background?: "muted" | "dark" | "white" | "black" | "translucent";
};

const Nav = ({ background, isInmersive, isPrimer = false }: NavProps) => {
  const { t } = useTranslation(["common"]);
  const router = useRouter();
  const [hasScrolled, setHasScrolled] = useState(false);
  const [mobileMenuIsOpen, setMobileMenuIsOpen] = useState(false);

  const handleScroll = useCallback(() => {
    const { scrollTop } = document.documentElement;
    if (scrollTop > 0) setHasScrolled(true);
    else setHasScrolled(false);
  }, []);

  useEffect(() => {
    handleScroll();
    document.addEventListener("scroll", handleScroll);

    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);

  const topNotification: TopNotificationProps = {
    title: t("banner-top"),
    link: {
      label: t("read-post"),
      href:
        "https://medium.com/livepeer-blog/introducing-a-brand-new-livepeer-org-3e433519b5d0",
      isExternal: true,
    },
  };

  const links: LinkType[] = [
    {
      label: t("nav-about"),
      href: "/about",
    },
    {
      label: t("nav-developers"),
      href: "/developers",
    },
    {
      label: t("nav-tokenholders"),
      href: "/tokenholders",
    },
    {
      label: t("nav-video-miners"),
      href: "/video-miners",
    },
    {
      label: t("nav-resources"),
      href: "/resources",
    },
  ];

  const isDark = background === "black" || background === "dark";
  let bg: string;
  let color: string;
  switch (background) {
    default:
    case "white":
      bg =
        isInmersive && !hasScrolled && !mobileMenuIsOpen
          ? "transparent"
          : "background";
      color = "text";
      break;
    case "muted":
      bg =
        isInmersive && !hasScrolled && !mobileMenuIsOpen
          ? "transparent"
          : isPrimer
          ? "rgba(255, 255, 255, .6)"
          : "muted";
      color = "text";
      break;
    case "dark":
      bg =
        isInmersive && !hasScrolled && !mobileMenuIsOpen
          ? "transparent"
          : "text";
      color = "background";
      break;
    case "black":
      bg =
        isInmersive && !hasScrolled && !mobileMenuIsOpen
          ? "transparent"
          : "black";
      color = "background";
      break;
    case "translucent":
      bg =
        isInmersive && !hasScrolled && !mobileMenuIsOpen
          ? "transparent"
          : "rgba(255, 255, 255, .5)";
      color = "text";
      break;
  }

  return (
    <>
      {topNotification && <TopNotification {...topNotification} />}
      <Box
        sx={{
          bg,
          color,
          position: "sticky",
          top: 0,
          width: "100%",
          zIndex: "header",
          transition: "box-shadow .3s, top .3s",
          boxShadow: hasScrolled ? "magical" : "none",
          backdropFilter:
            isPrimer && hasScrolled ? "saturate(180%) blur(5px)" : "none",
        }}>
        <Container
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            height: navHeight,
          }}>
          <LivepeerLogo
            isDark={isDark}
            disableHover={isPrimer ? true : false}
          />
          <Box
            sx={{
              "a:not(:last-of-type)": { mr: 5 },
              display: [isPrimer ? "null" : "none", null, "flex"],
            }}>
            {!isPrimer &&
              links.map((link) =>
                link.isExternal ? (
                  <NavLink
                    key={`desktop-nav-link-${link.label}`}
                    href={link.href}
                    data-dark={isDark}
                    target="_blank">
                    {link.label}
                  </NavLink>
                ) : (
                  <Link
                    key={`desktop-nav-link-${link.label}`}
                    href={link.href}
                    as={link.asPath}
                    passHref>
                    <NavLink data-dark={isDark}>{link.label}</NavLink>
                  </Link>
                )
              )}
            {isPrimer && (
              <Box
                sx={{
                  top: [hasScrolled ? 12 : 48, 0],
                  right: [16, 0],
                  position: ["fixed", "initial"],
                  pointerEvents: "none",
                }}>
                <Menu />
              </Box>
            )}
          </Box>
          {!isPrimer && (
            <IconButton
              sx={{
                color,
                display: ["block", "block", "none"],
                fontSize: 6,
              }}
              onClick={() => setMobileMenuIsOpen(true)}>
              <FiMenu size="24px" />
            </IconButton>
          )}
        </Container>
        <Box
          sx={{
            bg,
            color,
            position: "fixed",
            top: 0,
            height: mobileMenuIsOpen ? "100vh" : 0,
            transition: "height .2s",
            overflow: "hidden",
            width: "100%",
            zIndex: "dropdown",
            visibility: mobileMenuIsOpen ? "visible" : "hidden",
          }}>
          <Container
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              height: navHeight,
            }}>
            <LivepeerLogo isDark={isDark} />
            <IconButton
              sx={{ color, fontSize: 6 }}
              onClick={() => setMobileMenuIsOpen(false)}>
              <FiX size="24px" />
            </IconButton>
          </Container>
          <Container
            sx={{
              pb: 4,
              pt: "10vh",
              "a:not(:last-of-type)": { mb: 2 },
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              height: `calc(100vh - ${navHeight})`,
            }}>
            <Flex sx={{ flexDirection: "column" }}>
              {links.map((link) =>
                link.isExternal ? (
                  <A
                    key={`link-${link.label}-${link.href}`}
                    href={link.href}
                    target="_blank"
                    sx={{
                      color,
                      textAlign: "center",
                      fontSize: 7,
                      fontWeight: 600,
                    }}>
                    {link.label}
                  </A>
                ) : (
                  <Link
                    key={`link-${link.label}-${link.href}`}
                    href={link.href}
                    passHref>
                    <A
                      sx={{
                        color,
                        textAlign: "center",
                        fontSize: 7,
                        fontWeight: 600,
                      }}>
                      {link.label}
                    </A>
                  </Link>
                )
              )}
            </Flex>

            <Flex sx={{ flexDirection: "column" }}>
              <Button
                sx={{ mb: 3 }}
                onClick={() => {
                  setMobileMenuIsOpen(false);
                  router.push("/#get-started");
                }}>
                {t("nav-get-started")}
              </Button>
              <Text sx={{ fontSize: "14px", textAlign: "center" }}>
                © Livepeer, Inc. {new Date().getFullYear()}
              </Text>
            </Flex>
          </Container>
        </Box>
      </Box>
    </>
  );
};

export default Nav;
