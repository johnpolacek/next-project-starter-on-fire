import React, { useState, useEffect } from "react"
import { Flex, Box, Card, Heading, Text, Button } from "theme-ui"
import Spinner from "../graphics/Spinner"

const Form = ({
  children,
  id,
  buttonText,
  hideButton,
  after,
  enabled,
  onSubmit,
  error,
  heading,
  success,
}) => {
  const [errorMessage, setErrorMessage] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)

  useEffect(() => {
    // if the controller had an error, allow submit after error is fixed
    // also if it was successful, allow new form submit
    setIsSubmitting(false)
  }, [error, success])

  const handleSubmit = async (e) => {
    e.preventDefault()
    setErrorMessage("")
    setIsSubmitting(true)
    try {
      onSubmit(e)
    } catch (err) {
      setErrorMessage(err.message)
      setIsSubmitting(false)
    }
  }

  const disabled = isSubmitting || (typeof enabled !== "undefined" && !enabled)

  const ErrorMessage = (props) => (
    <Text id={id} as="p" sx={{ pb: 3, maxWidth: "300px" }} color="red">
      {children}
    </Text>
  )

  return (
    <Box id={id} as="form" onSubmit={handleSubmit}>
      {heading && (
        <Text as="h3" sx={{ pb: 3 }}>
          {heading}
        </Text>
      )}
      {children}
      {errorMessage !== "" && <ErrorMessage children={{ errorMessage }} />}
      {errorMessage !== "" && (
        <ErrorMessage id={id + "ErrorMessage"} children={errorMessage} />
      )}
      {typeof onCancel === "function" ? (
        <Flex>
          <Box sx={{ width: "50%", pr: 2 }}>
            <Button
              onClick={onCancel}
              sx={{ width: "100%", fontSize: 3, bg: "white", color: "gray" }}
            >
              Cancel
            </Button>
          </Box>
          <Box sx={{ width: "50%" }}>
            <Button
              sx={{
                width: "100%",
                fontSize: 2,
                bg: disabled ? "gray" : "primary",
              }}
              disabled={disabled}
              type="submit"
            >
              {isSubmitting ? <Spinner /> : buttonText}
            </Button>
          </Box>
        </Flex>
      ) : (
        <Button
          sx={{
            width: "100%",
            fontSize: 2,
            mt: 2,
            bg: disabled ? "muted" : "primary",
            display: hideButton ? "none" : "block",
          }}
          disabled={disabled}
          type="submit"
        >
          {isSubmitting ? <Spinner /> : buttonText}
        </Button>
      )}
      {after}
    </Box>
  )
}

export default Form