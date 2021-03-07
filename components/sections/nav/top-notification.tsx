import { Box, Text, Link as A } from "theme-ui";
import { FiArrowRight, FiArrowUpRight } from "react-icons/fi";
import Link from "next/link";
import { forwardRef, RefObject } from "react";

export type TopNotificationProps = {
  title?: string;
  description?: string;
  link: {
    label: string;
    href: string;
    asPath?: string;
    isExternal?: boolean;
  };
};

const TopNotification = forwardRef(
  ({ title, link }: TopNotificationProps, ref: RefObject<HTMLDivElement>) => (
    <Box
      ref={ref}
      sx={{
        bg: "black",
        color: "background",
        textAlign: "center",
        p: 2,
        variant: "text.small",
        position: "relative",
        zIndex: "1",
      }}>
      {title && <Text sx={{ display: "inline" }}>{title}</Text>}
      {link.isExternal ? (
        <A
          variant="accent"
          sx={{
            display: "inline-flex",
            cursor: "pointer",
            alignItems: "center",
            ml: 2,
          }}
          target="_blank"
          rel="noopener noreferrer"
          href={link.href}
          data-dark>
          {link.label}
          <i sx={{ ml: 1 }}>
            <FiArrowUpRight strokeWidth={3} />
          </i>
        </A>
      ) : (
        <Link href={link.href} as={link.asPath}>
          <A
            variant="accent"
            sx={{
              display: "inline-flex",
              cursor: "pointer",
              alignItems: "center",
              ml: 2,
            }}
            data-dark>
            {link.label}
            <i sx={{ ml: 1 }}>
              <FiArrowRight strokeWidth={3} />
            </i>
          </A>
        </Link>
      )}
    </Box>
  )
);

export default TopNotification;
