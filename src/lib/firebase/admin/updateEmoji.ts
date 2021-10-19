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
    storageBucket: "supportmyteam.appspot.com",
  })
}

let db = admin.firestore()

type Props = {
  uid: string
  emoji: string
}

const updateEmoji = async ({uid, emoji}: Props) => {
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