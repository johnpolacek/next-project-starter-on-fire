// deletes the test user account created during signups
// CLI command from project root:
// export GOOGLE_APPLICATION_CREDENTIALS="./src/lib/firebase/admin/firebase-adminsdk.json" && node ./src/lib/firebase/test/deleteTestUser.js

const serviceAccount = require("../admin/adminsdk.json") // this file is downloaded from firebase and contains your project secrets - do not commit to source control
const admin = require("firebase-admin")
const testUsers = require("../../../../cypress/fixtures/users.json")
const appConfig = require("../../../../appConfig")

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

admin
  .auth()
  .getUserByEmail(testUsers.new.email)
  .then(function (userRecord) {
    // See the UserRecord reference doc for the contents of userRecord.
    console.log("Successfully fetched user data for uid:", userRecord.uid)
    admin
      .auth()
      .deleteUser(userRecord.uid)
      .then(function () {
        console.log("Successfully deleted user")
        db.collection("users")
          .doc(userRecord.uid)
          .delete()
          .then(function () {
            console.log("User Document successfully deleted!")
          })
          .catch(function (error) {
            console.error("Error removing document: ", error)
            process.exit()
          })
      })
      .catch(function (error) {
        console.log("Error deleting user:", error)
        process.exit()
      })
  })
  .catch(function (error) {
    console.log("Test user does not exist")
    process.exit()
  })
