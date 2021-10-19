const admin = require("firebase-admin")
const serviceAccount = JSON.parse(process.env.NEXT_FIREBASE_ADMIN_SDK)
const appConfig = require("../../../../appConfig.json")

try {
  admin.instanceId()
} catch (err) {
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: appConfig.FIREBASE_DATABASE_URL,
    databaseAuthVariableOverride: {
      uid: "my-service-worker",
    },
  })
}

type Props = {
  uid: string
}

const readEmoji = async ({uid}: Props) => {
  let db = admin.firestore()
  try {
    const ref = db.collection("users").doc(uid)
    const doc = await ref.get()
    const emoji = doc.data().emoji
    return { emoji }
  } catch (error) {
    return { result: "error", error }
  }
}

export default readEmoji
