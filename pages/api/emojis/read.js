import readEmojis from "../../../src/lib/firebase/admin/readEmojis"

export default async (req, res) => {
  const debug = true

  if (req.method === "GET") {
    try {
      const data = await readEmojis()
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
