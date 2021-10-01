import { Box } from "theme-ui"

const Spinner = (props) => (
  <Box
    sx={{
      mt: "-12px",
      mb: "-16px",
    }}
  >
    <img
      width="48"
      height="48"
      src="/graphics/spinner.svg"
      alt="Processing request"
    />
  </Box>
)

export default Spinner
