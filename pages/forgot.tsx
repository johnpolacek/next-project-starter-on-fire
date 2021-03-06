import React from "react"
import Wrapper from "../src/layout/Wrapper"
import ForgotPassword from "../src/views/auth/ForgotPassword"
import * as appConfig from "../appConfig.json"

const ForgotPage = () => {
  return (
    <Wrapper
      url="https://next-project-starter.vercel.app/"
      title={appConfig.name + " | Forgot Password"}
      description="Get your next React project up and running quickly with Next.js, Firebase and more."
      twitter="johnpolacek"
      imageUrl="https://next-project-starter-on-fire.vercel.app/project-logo.png"
      imageAlt="Next Project Starter on Fire Logo"
    >
      <ForgotPassword />
    </Wrapper>
  )
}

export default ForgotPage
