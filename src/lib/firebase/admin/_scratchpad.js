// Run this in the CLI:
// node ./src/lib/firebase/admin/_scratchpad.js

const serviceAccount = require("./adminsdk.json")
const admin = require("firebase-admin")
const appConfig = require("../../../../appConfig.json")

const debug = true

console.log("Scratch Pad")

console.log("appConfig", appConfig)

try {
  admin.instanceId()
} catch (err) {
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: appConfig.FIREBASE_DATABASE_URL,
    storageBucket: appConfig.FIREBASE_STORAGE_BUCKET,
  })
}

let db = admin.firestore()

console.log("Firestore initialized...")

const runScratchPad = async () => {
  console.log("runScratchPad")

  console.log("======= create test data ========")

  try {
    let emojis = []
    const ref = db.collection("users")
    const snapshot = await ref.get()
    snapshot.forEach((doc) => {
      if (doc.data().emoji) {
        emojis.push(doc.data().emoji)
      }
    })
    console.log({ emojis })
  } catch (err) {
    console.log("ERROR:", err)
    return false
  }
}

runScratchPad()
