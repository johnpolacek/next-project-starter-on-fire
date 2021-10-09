import React, { useState } from "react"
import Router from "next/router"
import Link from "next/link"
import initFirebase from "../../lib/firebase/auth/initFirebase"
import { getAuth, signInWithEmailAndPassword } from "firebase/auth"
import { Box, Text, Label, Input, Checkbox } from "theme-ui"
import Form from "./Form"

initFirebase()
const auth = getAuth()

const SignupLink = () => (
  <Text as="p" sx={{ pt: 4, width: "100%" }}>
    Don’t have an account?{" "}
    <Link href="/signup" passHref>
      <a>Sign Up</a>
    </Link>
  </Text>
)

const LoginForm = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")

  const handleSubmit = async () => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        var user = userCredential.user
        if (user) {
          fetch("/api/login", {
            method: "POST",
            // eslint-disable-next-line no-undef
            headers: new Headers({ "Content-Type": "application/json" }),
            credentials: "same-origin",
            body: JSON.stringify({ user }),
          }).then(() => {
            Router.push("/app")
          })
        } else {
          setError("Not able to sign in")
        }
      })
      .catch((err) => {
        if (
          err.code === "auth/user-not-found" ||
          err.code === "auth/wrong-password"
        ) {
          setError("This login was not valid. Please try again")
        } else {
          setError(err.message)
        }
      })
  }

  return (
    <Box sx={{ maxWidth: "360px", mx: "auto" }}>
      <Form
        onSubmit={handleSubmit}
        buttonText="Login"
        after={<SignupLink />}
        error={error}
        id="LoginForm"
      >
        <Label htmlFor="email">Email</Label>
        <Input
          name="email"
          type="email"
          required="required"
          onChange={(e) => {
            setEmail(e.target.value)
            setError("")
          }}
          value={email}
        />
        <Label htmlFor="password">Password</Label>
        <Input
          name="password"
          required="required"
          onChange={(e) => {
            setPassword(e.target.value)
            setError("")
          }}
          value={password}
          type="password"
        />
        <Box sx={{ pb: 4 }}>
          <Link href="/forgot" passHref>
            <a>Forgot password?</a>
          </Link>
        </Box>
      </Form>
    </Box>
  )
}

export default LoginForm
