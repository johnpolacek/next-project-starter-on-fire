import React, { useState, createContext } from "react"

interface User {
  uid: string
  email: string
}

interface UserContextInterface {
  user: User
  setUser: (value: User) => void
}
const UserContext = createContext<UserContextInterface | null>(null)

const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null)

  return (
    <UserContext.Provider
      value={{
        user,
        setUser,
      }}
    >
      {children}
    </UserContext.Provider>
  )
}

export { UserContext, UserProvider }
