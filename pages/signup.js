import Wrapper from "../src/layout/Wrapper"
import SignUp from "../src/views/auth/SignUp"
import appConfig from "../app.config"

const SignUpPage = () => (
  <Wrapper
    url={"/signup/"}
    title={appConfig.name + " | Sign Up"}
    description={"Sign Up for the Next.js Project Starter on Fire"}
  >
    <SignUp />
  </Wrapper>
)

export default SignUpPage
