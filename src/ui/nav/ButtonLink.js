import { Link as A } from "theme-ui"
import Link from "next/link"

const ButtonLink = ({ href, children, bg, color, width }) => (
  <Link href={href}>
    <A
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
