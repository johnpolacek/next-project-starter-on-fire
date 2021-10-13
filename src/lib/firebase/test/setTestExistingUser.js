// deletes the test user account created during signups
// CLI command from project root:
// export GOOGLE_APPLICATION_CREDENTIALS="./src/lib/firebase/admin/firebase-adminsdk.json" && node ./src/lib/firebase/test/setTestExistingUser.js

const serviceAccount = require("../admin/adminsdk.json")
const admin = require("firebase-admin")
const testUsers = require("../../../../cypress/fixtures/users.json")

const debug = true

console.log("deleteTestUser")

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

try {
  const pageRef = db.collection("users").doc(testUsers.existing.id)
  pageRef
    .set({
      ...testUsers.existing,
    })
    .then(() => {
      console.log("Test owner user data updated")
      process.exit()
    })
} catch (err) {
  console.log("ERROR:", err)
  process.exit()
}
