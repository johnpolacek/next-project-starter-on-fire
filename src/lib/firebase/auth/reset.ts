/* globals window */
import initFirebase from "./initFirebase"
import { getAuth, sendSignInLinkToEmail } from "firebase/auth"
import * as appConfig from "../../../../appConfig.json"

const actionCodeSettings = {
  // URL you want to redirect back to. The domain (www.example.com) for this
  // URL must be whitelisted in the Firebase Console.
  url: appConfig.url.local + "/reset",
  // This must be true.
  handleCodeInApp: true,
}

initFirebase()
const auth = getAuth()

const Reset = async (email) => {
  return sendSignInLinkToEmail(auth, email, actionCodeSettings)
    .then(function () {
      // The link was successfully sent. Inform the user.
      // Save the email locally so you don't need to ask the user for it again
      // if they open the link on the same device.
      window.localStorage.setItem("emailForSignIn", email)
    })
    .catch((e) => {
      console.error(e)
      return false
    })
}

export default Reset
