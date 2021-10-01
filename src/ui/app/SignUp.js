import { Box, Text, Image } from "theme-ui"
import SignUpForm from "../forms/SignUpForm"

const SignUp = () => {
  return (
    <Box
      sx={{
        maxWidth: "1100px",
        mx: "auto",
        textAlign: "center",
        pb: 5,
      }}
    >
      <Text
        as="h2"
        sx={{
          py: 5,
          color: "secondary",
          fontSize: 8,
        }}
      >
        <Image
          sx={{
            height: "64px",
            position: "relative",
            top: "-2px",
            left: "-6px",
          }}
          src="/graphics/fire-joypixels.gif"
          alt="animated fire"
        />{" "}
        Sign Up{" "}
        <Image
          sx={{
            height: "64px",
            position: "relative",
            top: "-2px",
            left: "-6px",
          }}
          src="/graphics/fire-joypixels.gif"
          alt="more animated fire"
        />
      </Text>
      <SignUpForm />
    </Box>
  )
}

export default SignUp
