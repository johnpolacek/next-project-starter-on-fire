import { Box, Text, Image } from "theme-ui"
import { EmojisProvider } from "../../context/EmojisContext"
import EmojisList from "./EmojisList"

const Emojis = () => (
  <EmojisProvider>
    <EmojisList />
  </EmojisProvider>
)

export default Emojis
