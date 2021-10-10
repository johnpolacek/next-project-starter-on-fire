const admin = require("firebase-admin")
const serviceAccount = JSON.parse(process.env.NEXT_FIREBASE_ADMIN_SDK)

try {
  admin.instanceId()
} catch (err) {
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    databaseAuthVariableOverride: {
      uid: "my-service-worker",
    },
    storageBucket: "supportmyteam.appspot.com",
  })
}

let db = admin.firestore()

const readEmoji = async (uid) => {
  try {
    const ref = db.collection("users").doc(uid)
    const doc = await ref.get()
    const emoji = doc.data().emoji
    return { emoji }
  } catch (error) {
    return { result: "error", error }
  }
}

module.exports = readEmoji
