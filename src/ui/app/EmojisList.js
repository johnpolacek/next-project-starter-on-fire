import React, { useMemo, useState, useContext } from "react"
import useIsMounted from "../../hooks/useIsMounted"
import { EmojisContext } from "../../context/EmojisContext"
import { Box, Text, Image } from "theme-ui"

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
          console.log("/api/emoji/read", data)
          setEmojis([{ id: 1, name: data.emojis }])
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
      <Box>Emojis will go here...</Box>
    </Box>
  )
}

export default EmojisList
