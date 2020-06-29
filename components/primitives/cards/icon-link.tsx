/** @jsx jsx */
import { jsx, Link as A, SxStyleProp } from "theme-ui"
import Link from "next/link"

export type IconLinkProps = {
  icon: React.ReactNode
  label: React.ReactNode
  href: string
  asPath?: string
  isExternal?: boolean
  pushSx?: SxStyleProp
}

const sx: SxStyleProp = {
  display: "flex",
  alignItems: "center",
  variant: "text.normal",
  px: 4,
  py: 3,
  width: "fit-content",
  transition: "box-shadow .2s",
  "&:hover": { boxShadow: "magical" }
}

const IconLinkCard = ({
  icon,
  label,
  href,
  asPath,
  isExternal = false,
  pushSx
}: IconLinkProps) =>
  isExternal ? (
    <A
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      sx={{ ...sx, ...pushSx }}
    >
      <i sx={{ fontSize: 6, mr: 2 }}>{icon}</i>
      {label}
    </A>
  ) : (
    <Link href={href} as={asPath} passHref>
      <A sx={{ ...sx, ...pushSx }}>
        <i sx={{ fontSize: 6, mr: 2 }}>{icon}</i>
        {label}
      </A>
    </Link>
  )

export default IconLinkCard