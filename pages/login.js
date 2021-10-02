import Wrapper from "../src/layout/Wrapper"
import Login from "../src/views/auth/Login"
import appConfig from "../app.config"

const LoginPage = () => (
  <Wrapper
    url={"/signup/"}
    title={appConfig.name + " | Login"}
    description={"Login for the Next.js Project Starter on Fire"}
  >
    <Login />
  </Wrapper>
)

export default LoginPage
