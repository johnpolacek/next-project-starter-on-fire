const admin = require("firebase-admin")
const serviceAccount = JSON.parse(process.env.NEXT_FIREBASE_ADMIN_SDK)

try {
  admin.instanceId()
} catch (err) {
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: process.env.FIREBASE_DATABASE_URL,
  })
}

let db = admin.firestore()

const createItem = async (data) => {
  console.log("createItem data", data)
  const response = await db.collection("items").add(data)
  return { result: "success", id: response.id }
}

export default createItem
