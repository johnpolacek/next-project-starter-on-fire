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

const readAllEmojis = async (uid) => {
  try {
    let emojis = []
    const ref = db.collection("users")
    const snapshot = await ref.get()
    snapshot.forEach((doc) => {
      emojis.push(doc.data().emoji)
    })
    return { emojis }
  } catch (error) {
    return { result: "error", error }
  }
}

module.exports = readAllEmojis
