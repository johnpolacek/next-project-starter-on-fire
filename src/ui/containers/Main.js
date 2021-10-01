import { Box } from "theme-ui"

const Main = ({ children }) => {
  return (
    <Box
      as="main"
      sx={{
        display: "flex",
        flex: 1,
        minHeight: "80vh",
        px: [3, 4],
        pb: 4,
        alignItems: "center",
        bg: "white",
        transition: "background-color 200ms linear, border-color 200ms linear",
        borderBottom: "solid 1px",
        borderTop: "solid 1px",
        borderColor: "#EEE",
      }}
    >
      {children}
    </Box>
  )
}

export default Main
