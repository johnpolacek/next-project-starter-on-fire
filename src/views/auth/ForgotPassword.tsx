import React, { useState } from "react"
import { Box, Text, Button } from "theme-ui"
import Router from "next/router"
import appConfig from "../../../appConfig"
import ForgotPasswordForm from "../../ui/forms/ForgotPasswordForm"

const ForgotPassword = () => {
  const [isSent, setIsSent] = useState(false)

  return (
    <Box
      sx={{
        maxWidth: "420px",
        position: "relative",
        mx: "auto",
        px: 3,
        width: "100%",
      }}
    >
      <Text as="h2" sx={{ pb: 4, fontSize: 5, color: "primary" }}>
        Forgot your password?
      </Text>
      {isSent ? (
        <>
          <Text as="p" id="ForgotPasswordLinkSent">
            Please check your email, the link to reset your password has been
            sent.
          </Text>
        </>
      ) : (
        <>
          <Text as="p" sx={{ pb: 4 }}>
            No problem! Provide your email and we’ll send you an email to get
            signed back in.
          </Text>
          <ForgotPasswordForm onComplete={() => setIsSent(true)} />
        </>
      )}
    </Box>
  )
}

export default ForgotPassword
