import Wrapper from "../src/layout/Wrapper"
import Login from "../src/views/auth/Login"
import * as appConfig from "../appConfig.json"

const LoginPage = () => (
  <Wrapper
    url={"/signup/"}
    title={appConfig.name + " | Login"}
    description={"Login for the Next.js Project Starter on Fire"}
    twitter="johnpolacek"
    imageUrl="https://next-project-starter-on-fire.vercel.app/project-logo.png"
    imageAlt="Next Project Starter on Fire Logo"
  >
    <Login />
  </Wrapper>
)

export default LoginPage
