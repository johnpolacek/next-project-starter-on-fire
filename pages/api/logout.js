import withSession from "../../src/lib/session"

export default withSession(async (req, res) => {
  req.session.destroy()
  await req.session.save()
  res.json({ isLoggedIn: false })
})
