import createItem from "../../../src/lib/firebase/admin/createItem"

export default async (req, res) => {
  const debug = true

  if (req.method === "POST") {
    const data = req.body.data

    try {
      const createResponse = await createItem(data)
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
