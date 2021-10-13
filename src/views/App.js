import { useEffect, useContext } from "react"
import { EmojisProvider } from "../context/EmojisContext"
import { UserContext } from "../context/UserContext"
import { Box } from "theme-ui"
import EmojisList from "../ui/app/EmojisList"
import EmojiChooser from "../ui/app/EmojiChooser"
import Welcome from "../ui/app/Welcome"

const App = ({ user }) => {
  const { setUser } = useContext(UserContext)

  useEffect(() => {
    console.log(user)
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
        {!user && <Welcome />}
        <EmojisProvider>
          <EmojisList />
          {user && <EmojiChooser user={user} />}
        </EmojisProvider>
      </>
    </Box>
  )
}

export default App
