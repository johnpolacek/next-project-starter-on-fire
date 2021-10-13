import { Link as A } from "theme-ui"
import Link from "next/link"

type Props = {
  children: React.ReactNode
  href: string
  id: string
  bg: string
  width: string
  color: string
}

const ButtonLink = ({ href, children, id, bg, width, color }: Props) => (
  <Link href={href}>
    <A
      id={id}
      sx={{
        textDecoration: "none",
        fontSize: 2,
        px: 4,
        py: 3,
        bg: bg || "primary",
        color: color || "white",
        boxShadow: "none",
        borderRadius: "999px",
        border: "none",
        cursor: "pointer",
        display: "inline-block",
        width: width || "auto",
      }}
    >
      {children}
    </A>
  </Link>
)

export default ButtonLink
