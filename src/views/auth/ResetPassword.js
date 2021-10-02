import React, { useEffect } from "react"
import { Box, Card } from "theme-ui"
import Router from "next/router"
import appConfig from "../../../app.config"
import loginWithEmail from "../../../lib/firebase/loginWithEmail"
import ResetPasswordForm from "../../ui/forms/ResetPasswordForm"

const ResetPassword = (props) => {
  const isReady = typeof window !== "undefined"

  useEffect(() => {
    if (isReady && !props.isSignedIn) {
      loginWithEmail()
    }
  }, [isReady])

  return (
    <>
      {props.isSignedIn && (
        <Card sx={{ maxWidth: "480px" }}>
          <ResetPasswordForm />
        </Card>
      )}
    </>
  )
}

export default ResetPassword
