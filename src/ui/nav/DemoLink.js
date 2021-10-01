import Link from "next/link"
import { Link as A, Image } from "theme-ui"

const DemoLink = () => (
  <Link href="/app" passHref>
    <A
      sx={{
        textDecoration: "none",
        fontSize: 3,
        mt: 3,
        mb: [5, 6],
        mx: 3,
        px: 4,
        py: 3,
        bg: "orange",
        color: "#fff",
        boxShadow: "none",
        borderRadius: "4px",
        border: "none",
        cursor: "pointer",
        display: "inline-block",
      }}
    >
      <Image
        sx={{ position: "relative", top: "2px", left: "-8px" }}
        src="/demo.svg"
        alt=""
      />
      View Demo
    </A>
  </Link>
)

export default DemoLink
