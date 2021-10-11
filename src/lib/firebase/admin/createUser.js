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

const createUser = async ({ email, firstName, lastName, password }) => {
  try {
    return admin
      .auth()
      .createUser({
        email,
        password,
      })
      .then((userRecord) => {
        // See the UserRecord reference doc for the contents of userRecord.
        console.log("Successfully created new auth user:", userRecord.uid)
        return db
          .collection("users")
          .doc(userRecord.uid)
          .set({ firstName, lastName })
          .then(() => {
            console.log("Successfully created new user data:", userRecord.uid)
            return { result: "success", uid: userRecord.uid }
          })
      })
  } catch (error) {
    return { result: "error", error }
  }
}

export default createUser