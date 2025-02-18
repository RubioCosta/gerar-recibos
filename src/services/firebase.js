const firebase = require('firebase/app');
const auth = require('firebase/auth');
const { getDatabase } = require('firebase/database');

const config = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID,
  databaseURL: process.env.REACT_APP_DATABASE_URL
}

const app = firebase.initializeApp(config);

const db = getDatabase(app);

module.exports = {
  app,
  auth,
  db
};
