import React, { useMemo, useState } from "react"
import useIsMounted from "../../hooks/useIsMounted"
import { Flex, Box, Text, Image } from "theme-ui"

const EmojisList = () => {
  const [emojis, setEmojis] = useState(null)

  const isMounted = useIsMounted()
  useMemo(() => {
    if (isMounted) {
      fetch("/api/emojis/read", {
        method: "GET",
        // eslint-disable-next-line no-undef
        headers: new Headers({ "Content-Type": "application/json" }),
        credentials: "same-origin",
      })
        .then((response) => response.json())
        .then((data) => {
          console.log("/api/emoji/read", data)
          if (data.emojis) {
            setEmojis(data.emojis)
          }
        })
    }
  }, [isMounted])

  return (
    <Box sx={{ py: 5, opacity: emojis ? 1 : 0 }}>
      <Text
        as="h3"
        sx={{ pb: 3, fontSize: 0, fontWeight: 200, fontStyle: "italic" }}
      >
        Current State of the Emojis...
      </Text>
      <Flex sx={{ justifyContent: "center" }}>
        {emojis &&
          emojis.map((emoji) => (
            <Flex
              sx={{
                fontSize: 6,
                width: "96px",
                height: "96px",
                m: 2,
                border: "1px solid",
                borderColor: "lite",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              {emoji}
            </Flex>
          ))}
      </Flex>
    </Box>
  )
}

export default EmojisList
