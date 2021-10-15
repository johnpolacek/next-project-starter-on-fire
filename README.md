## Getting Started

To create a new project, run:

```
git clone https://github.com/johnpolacek/next-project-starter-on-fire.git your-project-name
cd your-project-name
npm install
```

To run the project in your local development environment:

```
npm run dev
```

Turn on automatic code formatting with [prettier](https://prettier.io/):

```
npm run format-watch
```

## Setting Up Firebase

We will be configuring our project to be able to support user creation, authentication and a forgot passord flow. Authenticated users will be able to interact with our Firestore cloud database.

### Local Environment Setup

From the official Next.js Firebase Example:

1. [Create a Firebase project](https://console.firebase.google.com/u/0/) and add a new app to it.
2. Create a `.env.local` file and copy the contents of `.env.local.example` into it:

```bash
cp .env.local.example .env.local
```

3. Set each variable on `.env.local` with your Firebase Configuration (found in "Project settings").

4. If you want to check the SSR page, get your account credentials from the Firebase console at _Project settings > Service accounts_, where you can click on _Generate new private key_ and download the credentials as a json file. Then set `FIREBASE_CLIENT_EMAIL` and `FIREBASE_PRIVATE_KEY` in `.env.local`

Note, you will need to create a new Firestore Database to generate a database url. You can start in production mode provided you follow the steps below.

In `.env.local` the value of `NEXT_PUBLIC_FIREBASE_DATABASE_URL` follows the format of `https://<project-name-here>.firebaseio.com` and the follows the format of `-----BEGIN PRIVATE KEY-----\nLongStringHere=\n-----END PRIVATE KEY-----\n`

We will use the Firebase Admin and Next.js API routes to interact with our cloud database. To do this, we will need to generate a service account key from Firebase. In the Firebase project console, go to project settings then Service Accounts. Click the ‘Generate new private key’ button to download the json file. 

Remove all the line breaks in the JSON file, then assign that string to the value of `FIREBASE_ADMIN_SDK` contained in single quotes.

### Scratchpad

When you are working with Firebase, it is nice to be able to quickly test out your Node functions. To make this easier, we have a scratchpad node script `src/lib/firebase/_scratchpad.js` that can be called via your CLI.

To get it to work, rename the admin sdk json file and move it to `src/lib/firebase/adminsdk.json`. This file should be excluded from source control and has already been added to `.gitignore`.

Once you have done the above, open up a terminal window at the top level of your project directory and you should be able to interact with your Firestore DB via the CLI.

```
node ./src/lib/firebase/admin/_scratchpad.js
```

### Authentication

First, you will need to enable authentication on your Firebase project. Choose the email/password as your Sign-in Provider. You can set up other providers in the future. Also, add your production domain to the authorized domains if you know it, otherwise remember to do it in the future once you are ready to deploy.

See the [Firebase Authentication on Websites Docs](https://firebase.google.com/docs/auth/web/start#web-version-9) for more info.


## Other Project Settings

Update `package.json` with info for your own project’s name and other info.

A global document head with `<title>`, `<description>`, `<meta>` tags and more can be updated by editing `src/layout/Head.js`.

If you are using Google Analytics or other services you need to embed on every page, add them to the `Wrapper` component at `src/layout/Wrapper.js`

## Authoring

Refer to the [Next.js docs](https://nextjs.org/docs/basic-features/pages) for how to author pages and [set up routing](https://nextjs.org/docs/routing/introduction).

Each page contains a `Layout` component with the `Header` and `Footer` components and a `Main` component for the page content itself. The `Layout` component accepts props for the url, title, description and more that are used to set meta tag data on each page - see `src/layout/Wrapper.js`.

You can write long form content in markdown with [mdx](https://mdxjs.com/). For example, this project’s homepage content has been authored in markdown - see `src/markdown/Home.mdx` and these docs have been imported to `src/views/Docs.js` from the project’s top level `README.md` file.

This starter project comes with its own components like in the `/src/ui` folder that you can use, customize or throw away.


## Styling

Configure your project’s color scheme, typography and other design system values by editing the theme object in `src/layout/Theme.js`. For more info on the theme object, refer to the [System UI Theme Specification](https://system-ui.com/theme/) and the [Theme UI docs](https://theme-ui.com/theming).

Edit global styles in `src/layout/Styles.js`.

Style components using Theme UI’s [sx prop](https://theme-ui.com/sx-prop) or use its [built-in components](https://theme-ui.com/components). You can also drop in components from any [styled-system](https://styled-system.com/) compatible component framework, such as [Chakra UI](https://chakra-ui.com/). For more info, refer to the [Theme UI docs](https://theme-ui.com/theming).

## Example App

The example app is an Emoji Picker. If you are a logged in user, you can pick an emoji and change it if you’ve already picked one. Everyone can see all the Emojis that are currently picked by the users.

## Tests

This project uses [Cypress](https://www.cypress.io/) for testing. Tests have been written for the landing page, docs and app.

Expand, modify or delete these tests in `cypress/integration` folder. A custom command written for testing the example App can be found in `cypress/support/commands.js`

To run tests in headless mode:

```
npm run test
```

To launch Cypress and run tests in a browser:
```
npm run cypress
```

Note: these tests include setup and teardown scripts that connect to Firebase and also require the admin sdk json file to be located at `src/lib/firebase/adminsdk.json`.


## Deploy

The deploy script in `package.json` will run tests, push to main. If you use a service like [Vercel](https://vercel.com), you can set up automatic deployments.

You will need to set up each environment variable from `.env.local` for your project deployment.

```
npm run deploy
```