import { useContext, useState } from "react"
import { UserContext } from "../../context/UserContext"
import { Flex, Box, Image, Button } from "theme-ui"
import NavHome from "./NavHome"
import NavLink from "./NavLink"
import GithubLink from "./GithubLink"
import Logout from "./Logout"
import { useRouter } from "next/router"

const Nav = () => {
  const router = useRouter()
  const { user } = useContext(UserContext)
  const [showDropdown, setShowDropdown] = useState(false)

  console.log("Nav user", user)

  return (
    <Box
      as="nav"
      sx={{
        display: "flex",
        flexWrap: "wrap",
        pt: [2, 0],
        position: "relative",
      }}
    >
      <Box
        sx={{
          width: ["100%", "66.66%"],
          pl: [0, 0, 3],
          textAlign: ["center", "left"],
        }}
      >
        <NavHome />
      </Box>
      <Flex
        sx={{
          width: ["100%", "33.33%"],
          textAlign: ["center", "right"],
          pr: [0, 3],
          alignItems: "center",
          justifyContent: ["center", "end"],
        }}
      >
        <NavLink isCurrent={router.pathname === "/app"} href="/app">
          App
        </NavLink>
        <NavLink isCurrent={router.pathname === "/docs"} href="/docs">
          Docs
        </NavLink>
        <GithubLink />
        {user && (
          <Flex
            sx={{
              borderLeft: "solid 1px",
              borderColor: "lite",
              ml: 2,
              pl: 4,
              pr: 3,
              height: "100%",
              alignItems: "center",
              opacity: 0.5,
            }}
          >
            <Button
              onClick={() => {
                setShowDropdown(!showDropdown)
              }}
              aria-hidden="true"
              sx={{ bg: "transparent", p: 0 }}
            >
              <Image src="/graphics/account.svg" alt="" />
              <Image
                aria-hidden="true"
                src="/graphics/expand.svg"
                alt=""
                sx={{
                  transform: showDropdown ? "rotate(180deg)" : "rotate(0deg)",
                }}
              />
            </Button>
          </Flex>
        )}
      </Flex>
      <Box
        className={showDropdown ? "" : "visually-hidden"}
        sx={{
          position: "absolute",
          top: "54px",
          right: "30px",
          px: 2,
          py: 2,
          border: "1px solid",
          borderColor: "lite",
          bg: "white",
          borderRadius: "8px",
          boxShadow: "0.0px 4.0px 12.0px 0px rgba(31, 33, 41, 0.08)",
        }}
      >
        <Logout />
      </Box>
    </Box>
  )
}

export default Nav
