import withSession from "../../src/lib/session"
import Wrapper from "../../src/layout/Wrapper"
import App from "../../src/views/App"
import * as appConfig from "../../appConfig.json"

const AppIndexPage = ({ user }) => (
  <Wrapper
    url={"/app/"}
    title={appConfig.name + " | App"}
    description={"Next.js Project Starter Example App"}
  >
    <App user={user} />
  </Wrapper>
)

export const getServerSideProps = withSession(async function (ctx) {
  const req = ctx.req
  const res = ctx.res

  let user = req.session.get("user")
  if (user === undefined) {
    user = null
  }

  return { props: { user } }
})

export default AppIndexPage
