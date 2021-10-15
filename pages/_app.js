import React from "react"
import { UserProvider } from "../src/context/UserContext"
import { ThemeProvider } from "theme-ui"
import Theme from "../src/ui/Theme"
import { Box } from "theme-ui"
import Header from "../src/ui/containers/Header"
import Footer from "../src/ui/containers/Footer"

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={Theme}>
      <UserProvider user={pageProps.user}>
        <Box
          sx={{
            display: "flex",
            minHeight: "100vh",
            flexDirection: "column",
          }}
        >
          <Header />
          <Component {...pageProps} />
          <Footer />
        </Box>
      </UserProvider>
    </ThemeProvider>
  )
}

export default React.memo(MyApp)
