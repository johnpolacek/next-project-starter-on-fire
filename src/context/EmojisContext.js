import React, { useState, createContext } from "react"

const EmojisContext = createContext({})

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
