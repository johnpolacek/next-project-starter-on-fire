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

const updateEmoji = async (uid, emoji) => {
  return admin
    .firestore()
    .collection("users")
    .doc(uid)
    .set({ emoji, updated: Date.now() })
    .then(() => {
      return { result: "success" }
    })
    .catch(function (error) {
      console.error("Error could not update emoji", error)
      return { result: "error", error }
    })
}

export default updateEmoji
