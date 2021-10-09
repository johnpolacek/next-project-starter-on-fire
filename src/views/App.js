import { useEffect, useContext } from "react"
import { UserContext } from "../context/UserContext"
import { Box } from "theme-ui"
import { EmojisProvider } from "../context/EmojisContext"
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
        py: 5,
      }}
    >
      <EmojisProvider>
        {user ? <EmojiChooser /> : <Welcome />}
        <EmojisList />
      </EmojisProvider>
    </Box>
  )
}

export default App
