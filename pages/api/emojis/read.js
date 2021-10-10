import readEmoji from "../../../src/lib/firebase/admin/readEmoji"
import readAllEmojis from "../../../src/lib/firebase/admin/readAllEmojis"

export default async (req, res) => {
  if (req.method === "GET") {
    try {
      const data = req.query.uid
        ? await readEmoji(req.query.uid)
        : await readAllEmojis()
      res.status(200).json(data)
    } catch (e) {
      console.log(`readEmojis: Error: ${e.message}`)
      res.status(500).json({ statusCode: 500, message: e.message })
    }
  } else {
    res.setHeader("Allow", "GET")
    res.status(405).end("Method Not Allowed")
  }
}
