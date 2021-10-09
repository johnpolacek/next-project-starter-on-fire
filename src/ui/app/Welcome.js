import { Box, Text } from "theme-ui"
import ButtonLink from "../../ui/nav/ButtonLink"

const Welcome = () => (
  <Box>
    <Text as="h2" sx={{ pb: 3, color: "primary" }}>
      Welcome to the Next Project Starter on Fire Example App
    </Text>
    <Text as="p" sx={{ pb: 4 }}>
      An account is required to use the app. Please sign up or login.
    </Text>
    <Box sx={{ py: 3 }}>
      <ButtonLink id="SignupButton" href="/signup" width="272px">
        Create New Account
      </ButtonLink>
    </Box>
    <Box sx={{ py: 3 }}>
      <ButtonLink
        id="LoginButton"
        href="/login"
        width="272px"
        bg="secondary"
        passHref
      >
        Login to Your Account
      </ButtonLink>
    </Box>
  </Box>
)

export default Welcome
