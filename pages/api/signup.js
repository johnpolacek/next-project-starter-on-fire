import createUser from "../../src/lib/firebase/admin/createUser"

export default async (req, res) => {
  const debug = true

  if (req.method === "POST") {
    const data = req.body
    console.log("api/signup req.body", req.body)

    try {
      const createResponse = await createUser(data)
      res.status(200).json(createResponse)
    } catch (e) {
      console.log(`createUser: Error: ${e.message}`)
      res.status(500).json({ statusCode: 500, message: e.message })
    }
  } else {
    res.setHeader("Allow", "POST")
    res.status(405).end("Method Not Allowed")
  }
}
