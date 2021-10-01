import React from "react"
import { Text, Image } from "theme-ui"
import NavLink from "./NavLink"

const NavHome = () => (
  <NavLink isCurrent={false} href="/">
    <Text
      as="h1"
      sx={{
        color: "black",
        fontWeight: "inherit",
        m: 0,
        fontSize: "inherit",
      }}
    >
      <Text
        as="span"
        sx={{
          pr: 2,
          position: "relative",
          top: "-2px",
          color: "primary",
        }}
      >
        <Text as="span" sx={{ letterSpacing: "2px", display: "inline-block" }}>
          &lt;
          <Image
            sx={{
              height: "24px",
              position: "relative",
              left: "-3px",
            }}
            src="/graphics/fire-joypixels.gif"
            alt="animated fire"
          />
          /&gt;
        </Text>
      </Text>
      <Text as="span">Next Project Starter on Fire</Text>
    </Text>
  </NavLink>
)

export default React.memo(NavHome)
