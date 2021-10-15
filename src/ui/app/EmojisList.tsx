import { EmojisContext } from "../../context/EmojisContext"
import React, { useMemo, useState, useContext } from "react"
import useIsMounted from "../../hooks/useIsMounted"
import { Flex, Box, Text, Image } from "theme-ui"

const EmojisList = () => {
  const { emojis, setEmojis } = useContext(EmojisContext)

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
      <Flex as="ul" sx={{ justifyContent: "center", p: 0 }}>
        {emojis &&
          emojis.map((emoji, i) => (
            <Flex
              as="li"
              key={"EmojiListItem" + i}
              id={"EmojiListItem" + i}
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
