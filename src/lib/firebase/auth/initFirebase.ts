import { initializeApp } from "firebase/app"
import appConfig from "../../../../appConfig"

const firebaseConfig = {
  apiKey: appConfig.FIREBASE_API_KEY,
  authDomain: appConfig.FIREBASE_AUTH_DOMAIN,
  databaseURL: appConfig.FIREBASE_DATABASE_URL,
  projectId: appConfig.FIREBASE_PROJECT_ID,
  storageBucket: appConfig.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: appConfig.FIREBASE_APP_ID,
}

const InitFirebase = () => {
  const app = initializeApp(firebaseConfig)
}

export default InitFirebase
