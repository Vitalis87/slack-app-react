import firebase from "firebase";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: "slack-clone-cdfa5.firebaseapp.com",
  projectId: "slack-clone-cdfa5",
  storageBucket: "slack-clone-cdfa5.appspot.com",
  messagingSenderId: "659419097876",
  appId: "1:659419097876:web:dbc150cd9cd60e1b163001",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };
