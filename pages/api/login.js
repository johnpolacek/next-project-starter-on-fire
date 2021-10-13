import withSession from "../../src/lib/session"

export default withSession(async (req, res) => {
  const { user } = await req.body

  try {
    req.session.set("user", { uid: user.uid, email: user.email })
    await req.session.save()
    res.json(user)
  } catch (error) {
    console.error(error)
    const { response: fetchResponse } = error
    res.status(fetchResponse?.status || 500)
    res.json(error.data)
  }
})
