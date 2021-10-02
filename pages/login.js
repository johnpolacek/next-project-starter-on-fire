import Wrapper from "../src/layout/Wrapper"
import Login from "../src/views/auth/Login"

const LoginPage = () => (
  <Wrapper
    url={"/signup/"}
    title={"Project Starter | Login"}
    description={"Login for the Next.js Project Starter on Fire"}
  >
    <Login />
  </Wrapper>
)

export default LoginPage
