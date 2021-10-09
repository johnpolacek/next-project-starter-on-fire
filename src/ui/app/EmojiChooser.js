import dynamic from "next/dynamic"
import { Flex, Text } from "theme-ui"

const Picker = dynamic(() => import("emoji-picker-react"), { ssr: false })

const EmojiChooser = () => {
  const onEmojiClick = (event, emojiObject) => {
    console.log(emojiObject)
  }

  return (
    <Flex id="EmojiChooser" sx={{ justifyContent: "center", flexWrap: "wrap" }}>
      <Text as="h3" sx={{ width: "100%", pb: 4 }}>
        Choose your Emoji
      </Text>
      <Picker onEmojiClick={onEmojiClick} />
    </Flex>
  )
}

export default EmojiChooser
