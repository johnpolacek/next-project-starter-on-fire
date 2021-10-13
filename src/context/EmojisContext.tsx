import React, { useState, createContext } from "react"

interface EmojisContextInterface {
  emojis: string[]
  setEmojis: (value: string[]) => void
}
const EmojisContext = createContext<EmojisContextInterface | null>(null)

const EmojisProvider = ({ children }) => {
  const [emojis, setEmojis] = useState(null)

  return (
    <EmojisContext.Provider
      value={{
        emojis,
        setEmojis,
      }}
    >
      {children}
    </EmojisContext.Provider>
  )
}

export { EmojisContext, EmojisProvider }
