import firebase from "firebase";

// Config of the firebase
const firebaseConfig = {
  apiKey: "AIzaSyBlmfNEFu_n-61i-foRUIsX9DEQz4JEL8E",
  authDomain: "clone-a0688.firebaseapp.com",
  databaseURL: "https://clone-a0688-default-rtdb.firebaseio.com",
  projectId: "clone-a0688",
  storageBucket: "clone-a0688.appspot.com",
  messagingSenderId: "875513842959",
  appId: "1:875513842959:web:93525a80129e4a08b8827a",
  measurementId: "G-WDPF2SWYR8",
};
// initialize the app with firebase congfig
const firebaseApp = firebase.initializeApp(firebaseConfig);

// initialize the firebase database
const db = firebaseApp.firestore();

//initialize auth
const auth = firebase.auth();

export { db, auth };
