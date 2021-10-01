import React, { useEffect } from "react"
import { ThemeProvider } from "theme-ui"
import Layout from "./Layout"
import Theme from "../ui/Theme"

const Wrapper = ({
  title,
  description,
  url,
  imageUrl,
  imageAlt,
  twitter,
  children,
}) => {
  // Want Google Analytics? --> https://github.com/react-ga/react-ga --> add your UI code below
  // ReactGA.initialize("UA-1234567-89")
  // ReactGA.set({ anonymizeIp: true })
  // if (typeof window !== "undefined") {
  //   ReactGA.pageview(window.location.pathname + window.location.search)
  // }

  return (
    <ThemeProvider theme={Theme}>
      <Layout
        {...{
          title,
          description,
          url,
          imageUrl,
          imageAlt,
          twitter,
          children,
        }}
      />
    </ThemeProvider>
  )
}

export default React.memo(Wrapper)
