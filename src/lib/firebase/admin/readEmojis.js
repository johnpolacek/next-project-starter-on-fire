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

const readEmojis = async (id) => {
  try {
    // const ref = db.collection("items")
    // const snapshot = await db.collection("items").get()

    // const items = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }))

    // return { items }
    return { emojis: "go here" }
  } catch (error) {
    return { result: "error", error }
  }
}

module.exports = readEmojis
