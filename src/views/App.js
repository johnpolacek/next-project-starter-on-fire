import { useEffect, useContext } from "react"
import { UserContext } from "../context/UserContext"
import { Box } from "theme-ui"
import EmojisList from "../ui/app/EmojisList"
import EmojiChooser from "../ui/app/EmojiChooser"
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
      <>
        <EmojisList />
        {user ? <EmojiChooser user={user} /> : <Welcome />}
      </>
    </Box>
  )
}

export default App
