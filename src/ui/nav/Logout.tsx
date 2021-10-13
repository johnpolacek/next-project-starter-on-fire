import { setCookie } from "nookies"
import { Button } from "theme-ui"

const onLogout = () => {
  fetch("/api/logout").then(() => {
    setCookie(null, "uid", null, {
      maxAge: 30 * 24 * 60 * 60,
      path: "/",
    })
    window.location.reload()
  })
}

const Logout = () => (
  <Button onClick={onLogout} sx={{ color: "primary", bg: "white" }}>
    Logout
  </Button>
)

export default Logout
