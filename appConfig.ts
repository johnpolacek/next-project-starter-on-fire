const appConfig = {
  // url : used to set the password reset flow for each environment
  url: {
    production: "https://next-project-starter-on-fire.vercel.app/",
    // staging: "https://next-project-starter-on-fire-staging.vercel.app/",
    local: "http://localhost:3000",
  },
  // name : appears in page titles, header nav
  name: "Next.js Project Starter on Fire",
  FIREBASE_STORAGE_BUCKET: "project-starter-on-fire.appspot.com",
  FIREBASE_PROJECT_ID: "project-starter-on-fire",
  FIREBASE_DATABASE_URL: "https://project-starter-on-fire.firebaseio.com",
  FIREBASE_AUTH_DOMAIN: "project-starter-on-fire.firebaseapp.com",
  FIREBASE_API_KEY: "AIzaSyBfdCdeP_PAa6u69tiTn79XeRX44AU_mBg",
  FIREBASE_APP_ID: "1:595634645540:web:270ebe6a6e0831bd4906b1"
}

export default appConfig
