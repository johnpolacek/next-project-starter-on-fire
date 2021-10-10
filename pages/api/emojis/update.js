import updateEmoji from "../../../src/lib/firebase/admin/updateEmoji"

export default async (req, res) => {
  const debug = true

  if (req.method === "POST") {
    const uid = req.body.uid
    const emoji = req.body.emoji

    try {
      const createResponse = await updateEmoji(uid, emoji)
      res.status(200).json(createResponse)
    } catch (e) {
      console.log(`createItem: Error: ${e.message}`)
      res.status(500).json({ statusCode: 500, message: e.message })
    }
  } else {
    res.setHeader("Allow", "POST")
    res.status(405).end("Method Not Allowed")
  }
}
