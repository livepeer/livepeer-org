/** @jsx jsx */
import { jsx, Card, Box, Heading, Text } from "theme-ui";
import CardLink, { CardLinkProps } from "../links/card";
import cn from "classnames";
import Link from "next/link";
import { ReactNode } from "react";

export type IconCardProps = {
  icon: ReactNode;
  title: ReactNode;
  description: string;
  linkProps: CardLinkProps;
  titleLabel?: string;
  className?: string;
  isClickable?: boolean;
};

const hoverSx = {
  transition: "all .2s",
  ".icon-card-link": {
    transition: "color .2s",
  },
  "&:hover": {
    boxShadow: "0px 80px 96px rgba(0, 0, 0, 0.32)",
    bg: "text",
    color: "background",
    ".title_label": {
      color: "lightGray",
    },
    ".icon-card-link": {
      color: "primary",
    },
  },
};

const IconCard = ({
  icon,
  title,
  description,
  titleLabel = "For",
  linkProps,
  className,
  isClickable,
}: IconCardProps) => {
  const markup = (
    <Card
      className={cn("c-animate", className)}
      sx={{
        height: "526px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        ...(isClickable ? hoverSx : {}),
      }}>
      <div>
        <Box sx={{ mb: 5 }}>
          <i
            sx={{
              width: 16,
              height: 16,
              bg: "primary",
              color: "text",
              fontSize: 6,
              variant: "layout.flexCenter",
              borderRadius: "full",
            }}>
            {icon}
          </i>
        </Box>
        {/* <Text
          variant="heading.5"
          sx={{ textAlign: "left", mb: 1 }}
          className="title_label">
          {titleLabel}
        </Text> */}
        <Heading variant="heading.4" sx={{ textAlign: "left", mb: "24px" }}>
          {title}
        </Heading>
        <Text variant="normal">{description}</Text>
      </div>
      <CardLink
        as={isClickable ? "div" : "a"}
        {...linkProps}
        className="icon-card-link"
      />
    </Card>
  );

  if (!isClickable) return markup;
  if (linkProps.link.isExternal) {
    return (
      <a href={linkProps.link.href} target="_blank">
        {markup}
      </a>
    );
  }
  return (
    <Link href={linkProps.link.href} as={linkProps.link.asPath} passHref>
      <a>{markup}</a>
    </Link>
  );
};

export default IconCard;
