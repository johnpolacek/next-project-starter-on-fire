import React, { useState, useContext } from "react"
import { ItemsContext } from "../../context/ItemsContext"
import { Flex, Box, Text, Label, Input } from "theme-ui"
import Form from "./Form"

const CreateItemForm = () => {
  const { items, setItems } = useContext(ItemsContext)

  const [name, setName] = useState("")
  const [errorMessage, setErrorMessage] = useState("")
  const [numAdded, setNumAdded] = useState(0)

  const handleSubmit = async () => {
    const newItemData = { name }

    fetch("api/item/create", {
      method: "POST",
      // eslint-disable-next-line no-undef
      headers: new Headers({ "Content-Type": "application/json" }),
      credentials: "same-origin",

      body: JSON.stringify({ data: newItemData }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.result === "success") {
          setItems([...items, newItemData])
          setNumAdded(numAdded + 1)
          setName("")
        } else {
          setErrorMessage(data.error)
        }
      })
  }

  return (
    <Box sx={{ maxWidth: "320px", mx: "auto", opacity: items ? 1 : 0 }}>
      <Form
        onSubmit={handleSubmit}
        buttonText="+ Add Item"
        error={errorMessage}
        id="CreateItemForm"
        heading="Add New Item"
        success={numAdded}
      >
        <Label htmlFor="name">Item Name</Label>
        <Input
          name="name"
          type="text"
          onChange={(e) => setName(e.target.value)}
          required="required"
          value={name}
        />
      </Form>
    </Box>
  )
}

export default CreateItemForm
