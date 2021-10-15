import { Box, Text } from "theme-ui"
import ButtonLink from "../../ui/nav/ButtonLink"

const Welcome = () => (
  <Box sx={{ pt: 5 }}>
    <Text as="h2" sx={{ py: 3, color: "primary" }}>
      Welcome to the Next Project Starter on Fire Example App
    </Text>
    <Text as="p" sx={{ pb: 4 }}>
      Sign up or login to add your emoji.
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
      >
        Login to Your Account
      </ButtonLink>
    </Box>
  </Box>
)

export default Welcome
