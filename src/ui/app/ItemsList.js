import React, { useMemo, useState, useContext } from "react"
import useIsMounted from "../../hooks/useIsMounted"
import { ItemsContext } from "../../context/ItemsContext"
import { Box, Text, Image } from "theme-ui"

const ItemsList = () => {
  const { items, setItems } = useContext(ItemsContext)

  const isMounted = useIsMounted()
  useMemo(() => {
    if (isMounted) {
      fetch("/api/item/read", {
        method: "GET",
        // eslint-disable-next-line no-undef
        headers: new Headers({ "Content-Type": "application/json" }),
        credentials: "same-origin",
      })
        .then((response) => response.json())
        .then((data) => {
          setItems(data.items)
          console.log("/api/item/read", data)
        })
    }
  }, [isMounted])

  return (
    <Box sx={{ pt: 4, pb: 5, opacity: items ? 1 : 0 }}>
      <Text as="h2" sx={{ pb: 3 }}>
        Items List
      </Text>
      {items && (
        <Box
          as="ul"
          sx={{
            textAlign: "left",
            width: "100%",
            maxWidth: "180px",
            mx: "auto",
          }}
        >
          {items.map((item) => (
            <Box key={item.id} data-id={item.id} sx={{ pb: 2 }} as="li">
              {item.name}
            </Box>
          ))}
        </Box>
      )}
    </Box>
  )
}

export default ItemsList
