// deletes the test user account created during signups
// CLI command from project root:
// export GOOGLE_APPLICATION_CREDENTIALS="./src/lib/firebase/admin/firebase-adminsdk.json" && node ./src/lib/firebase/test/setTestExistingUser.js

const serviceAccount = require("../admin/adminsdk.json") // this file is downloaded from firebase and contains your project secrets - do not commit to source control
const admin = require("firebase-admin")
const testUsers = require("../../../../cypress/fixtures/users.json")
const appConfig = require("../../../../appConfig.json")

const debug = true

console.log("deleteTestUser")

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
