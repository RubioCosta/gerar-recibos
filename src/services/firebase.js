import auth from 'firebase/auth'
import firebase from 'firebase'
import { getDatabase } from 'firebase/database'

const firebaseConfig = {
  apiKey: process.env.EXPO_PUBLIC_API_KEY,
  authDomain: process.env.EXPO_PUBLIC_AUTH_DOMAIN,
  projectId: process.env.EXPO_PUBLIC_PROJECT_ID,
  storageBucket: process.env.EXPO_PUBLIC_STORAGE_BUCKET,
  messagingSenderId: process.env.EXPO_PUBLIC_SENDER_ID,
  appId: process.env.EXPO_PUBLIC_APP_ID,
  databaseURL: process.env.EXPO_PUBLIC_DATABASE
}

const app = firebase.initializeApp(firebaseConfig);

const db = getDatabase(app);

const firebase = {
  app,
  db,
  auth
}

export default firebase;
