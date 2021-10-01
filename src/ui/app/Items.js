import { Box, Text, Image } from "theme-ui"
import { ItemsProvider } from "../../context/ItemsContext"
import ItemsList from "./ItemsList"
import CreateItemForm from "../forms/CreateItemForm"

const Items = () => (
  <ItemsProvider>
    <ItemsList />
    <CreateItemForm />
  </ItemsProvider>
)

export default Items
