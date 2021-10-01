import React, { useState } from "react"
import { setCookie } from "nookies"
import Router from "next/router"
import Link from "next/link"
import initFirebase from "../../lib/firebase/auth/initFirebase"
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth"
import { getDatabase, ref, child, get } from "firebase/database"
import { Flex, Box, Text, Label, Input, Checkbox } from "theme-ui"
import Form from "./Form"

initFirebase()
const auth = getAuth()

const LoginLink = () => (
  <Text as="p" sx={{ pt: 4, width: "100%" }}>
    Already have an account?{" "}
    <Link href="/login" passHref>
      <a>Login</a>
    </Link>
  </Text>
)

const SignUpForm = () => {
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [email, setEmail] = useState("")
  const [errorMessage, setErrorMessage] = useState("")
  const [password, setPassword] = useState("")
  const [checked, setChecked] = useState(false)

  const onCheck = () => {
    setErrorMessage("")
    setChecked(!checked)
  }

  const handleSubmit = async () => {
    if (checked) {
      createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          const user = userCredential.user
          console.log("Created User", user)
          fetch("/api/login", {
            method: "POST",
            // eslint-disable-next-line no-undef
            headers: new Headers({ "Content-Type": "application/json" }),
            credentials: "same-origin",
            body: JSON.stringify({
              user: { uid: user.uid, email, firstName, lastName },
            }),
          }).then(() => {
            setCookie(null, "uid", user.uid, {
              maxAge: 30 * 24 * 60 * 60,
              path: "/",
            })
            window.location.reload()
          })
        })
        .catch((error) => {
          console.log(error)
          setErrorMessage(error.message)
        })
    } else {
      setError("Please agree to the terms and conditions to create an account.")
    }
  }

  return (
    <Box sx={{ maxWidth: "420px", mx: "auto" }}>
      <Form
        onSubmit={handleSubmit}
        buttonText="Sign Up"
        after={<LoginLink />}
        error={errorMessage}
        id="SignupForm"
      >
        <Flex sx={{ flex: "flexWrap" }}>
          <Box sx={{ width: "40%", pr: 1 }}>
            <Label htmlFor="first">First Name</Label>
            <Input
              name="first"
              type="text"
              onChange={(e) => setFirstName(e.target.value)}
              required="required"
              value={firstName}
            />
          </Box>
          <Box sx={{ width: "60%", pl: 1 }}>
            <Label htmlFor="last">Last Name</Label>
            <Input
              name="last"
              type="text"
              onChange={(e) => setLastName(e.target.value)}
              required="required"
              value={lastName}
            />
          </Box>
        </Flex>
        <Label htmlFor="email">Email</Label>
        <Input
          name="email"
          type="email"
          onChange={(e) => setEmail(e.target.value)}
          required="required"
          value={email}
        />
        <Label htmlFor="password">
          Password{" "}
          <Text as="small" sx={{ fontSize: "80%" }}>
            (at least 8 characters)
          </Text>
        </Label>
        <Input
          name="password"
          type="password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          required="required"
        />
        <Box sx={{ pb: 4 }}>
          <Label
            id="agreeTerms"
            sx={{
              display: "flex",
              cursor: "pointer",
              fontWeight: "normal",
              color: "#777",
            }}
          >
            <Checkbox onChange={onCheck} checked={checked} />
            <Box sx={{ pt: "2px" }}>I agree to the terms and conditions</Box>
          </Label>
        </Box>
      </Form>
    </Box>
  )
}

export default SignUpForm
