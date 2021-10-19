import Wrapper from "../src/layout/Wrapper"
import SignUp from "../src/views/auth/SignUp"
import * as appConfig from "../appConfig.json"

const SignUpPage = () => (
  <Wrapper
    url={"/signup/"}
    title={appConfig.name + " | Sign Up"}
    description={"Sign Up for the Next.js Project Starter on Fire"}
    twitter="johnpolacek"
    imageUrl="https://next-project-starter-on-fire.vercel.app/project-logo.png"
    imageAlt="Next Project Starter on Fire Logo"
  >
    <SignUp />
  </Wrapper>
)

export default SignUpPage
