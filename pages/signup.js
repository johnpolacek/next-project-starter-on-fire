import Wrapper from "../src/layout/Wrapper"
import SignUp from "../src/ui/app/SignUp"

const SignUpPage = () => (
  <Wrapper
    url={"/signup/"}
    title={"Project Starter | Sign Up"}
    description={"Sign Up for the Next.js Project Starter on Fire"}
  >
    <SignUp />
  </Wrapper>
)

export default SignUpPage
