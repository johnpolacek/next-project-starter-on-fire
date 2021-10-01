import { useEffect, useContext } from "react"
import { UserContext } from "../context/UserContext"
import { Box } from "theme-ui"
import Items from "../ui/app/Items"
import Welcome from "../ui/app/Welcome"

const App = ({ user }) => {
  const { setUser } = useContext(UserContext)

  useEffect(() => {
    setUser(user ? user : false)
  }, [user])

  return (
    <Box
      sx={{
        maxWidth: "1100px",
        mx: "auto",
        textAlign: "center",
        pb: 5,
      }}
    >
      {user ? <Items /> : <Welcome />}
    </Box>
  )
}

export default App
