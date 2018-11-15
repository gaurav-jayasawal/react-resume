import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

var config = {
  apiKey: "AIzaSyBwREQJG7LNaWlmPGMZ5B0GASmNa8oGDAc",
  authDomain: "task3-ed363.firebaseapp.com",
  databaseURL: "https://task3-ed363.firebaseio.com",
  projectId: "task3-ed363",
  storageBucket: "task3-ed363.appspot.com",
  messagingSenderId: "429931838511"
};
firebase.initializeApp(config);
firebase.firestore().settings({ timestampsInSnapshots: true });

export default firebase;
