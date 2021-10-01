// Run this in the CLI:
// node ./src/lib/firebase/admin/_scratchpad.js

const serviceAccount = require("./adminsdk.json")
const admin = require("firebase-admin")

const debug = true

console.log("Scratch Pad")

try {
  admin.instanceId()
} catch (err) {
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: process.env.NEXT_FIREBASE_DATABASE_URL,
    storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  })
}

let db = admin.firestore()

console.log("Firestore initialized...")

const runScratchPad = async () => {
  console.log("runScratchPad")

  console.log("======= create test data ========")

  try {
    const timestamp = Date.now().toString()
    const res = await db
      .collection("items")
      .doc(timestamp)
      .set({ name: "Item " + Math.ceil(Math.random() * 100000000) })
      .then((result) => {
        console.log("Successfully executed write at: ", result)
      })
  } catch (err) {
    console.log("ERROR:", err)
    return false
  }
}

runScratchPad()
