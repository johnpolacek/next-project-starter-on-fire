import React from "react"
import { Link as A } from "theme-ui"
import Link from "next/link"

type Props = {
  children: React.ReactNode
  href: string
  isCurrent: boolean
}

const NavLink = ({ children, href, isCurrent }) => {
  return (
    <Link href={href} passHref>
      <A
        sx={{
          p: 3,
          fontSize: [1, 1, 3],
          fontWeight: 200,
          display: "inline-block",
          textDecoration: "none",
          borderBottom: "1px solid",
          mb: "-2px",
          borderColor: isCurrent ? "primary" : "transparent",
        }}
      >
        {children}
      </A>
    </Link>
  )
}

export default React.memo(NavLink)