import Wrapper from "../src/layout/Wrapper"
import Home from "../src/views/Home"
import appConfig from "../appConfig"

// Note: It is recommended for SEO that you have a different title and description for each page

const IndexPage = () => (
  <Wrapper
    url="https://next-project-starter.vercel.app/"
    title={appConfig.name}
    description="Get your next React project up and running quickly with Next.js, Firebase and more."
    twitter="johnpolacek"
    imageUrl="https://next-project-starter-on-fire.vercel.app/project-logo.png"
    imageAlt="Next Project Starter on Fire Logo"
  >
    <Home />
  </Wrapper>
)

export default IndexPage
