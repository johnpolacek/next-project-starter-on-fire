import React, { useState, useMemo, useContext } from "react"
import useIsMounted from "../../hooks/useIsMounted"
import dynamic from "next/dynamic"
import { Flex, Box, Text } from "theme-ui"
import { EmojisContext } from "../../context/EmojisContext"

const Picker = dynamic(() => import("emoji-picker-react"), { ssr: false })

const EmojiChooser = ({ user }) => {
  const [emoji, setEmoji] = useState(null)
  const { emojis, setEmojis } = useContext(EmojisContext)

  const isMounted = useIsMounted()
  useMemo(() => {
    if (isMounted) {
      fetch("/api/emojis/read?uid=" + user.uid, {
        method: "GET",
        // eslint-disable-next-line no-undef
        headers: new Headers({ "Content-Type": "application/json" }),
        credentials: "same-origin",
      })
        .then((response) => response.json())
        .then((data) => {
          setEmoji(data.emoji ? data.emoji : "")
        })
    }
  }, [isMounted])

  const onEmojiClick = (event, emojiObject) => {
    fetch("/api/emojis/update", {
      method: "POST",
      // eslint-disable-next-line no-undef
      headers: new Headers({ "Content-Type": "application/json" }),
      credentials: "same-origin",
      body: JSON.stringify({
        uid: user.uid,
        emoji: emojiObject.emoji,
      }),
    })
      .then(() => {
        // emoji was updated on firebase
      })
      .catch((err) => {
        console.log(err)
      })
    setEmoji(emojiObject.emoji)
    setEmojis([emojiObject.emoji, ...emojis])
  }

  return (
    <Flex id="EmojiChooser" sx={{ justifyContent: "center", flexWrap: "wrap" }}>
      <Box
        sx={{
          p: 4,
          border: "1px solid",
          borderRadius: "8px",
          borderColor: "lite",
          mb: 4,
          boxShadow: "0.0px 4.0px 12.0px 0px rgba(31, 33, 41, 0.08)",
        }}
      >
        <Flex
          sx={{
            fontSize: emoji ? 8 : 1,
            width: "120px",
            height: "120px",
            mb: 2,
            border: "1px solid",
            borderColor: "lite",
            alignItems: "center",
            justifyContent: "center",
            opacity: emoji ? 1 : 0,
            transition: "opacity 0.5s",
          }}
          id="EmojiCurrent"
        >
          {emoji === "" ? "none" : emoji}
        </Flex>
        <Text>Your Emoji</Text>
      </Box>
      <Text as="h3" sx={{ width: "100%", pb: 2, fontWeight: 200 }}>
        Choose a new Emoji
      </Text>
      <Picker onEmojiClick={onEmojiClick} />
    </Flex>
  )
}

export default EmojiChooser
