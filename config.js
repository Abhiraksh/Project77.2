import firebase from "firebase";
require("@firebase/firestore");


var firebaseConfig = {
    apiKey: "AIzaSyC2bY-nxXUM48un14S2wxkznZvx0BC5fZk",
    authDomain: "class77-66568.firebaseapp.com",
    databaseURL: "https://class77-66568-default-rtdb.firebaseio.com",
    projectId: "class77-66568",
    storageBucket: "class77-66568.appspot.com",
    messagingSenderId: "201525054330",
    appId: "1:201525054330:web:79e023518569e0469be4c3"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

export default firebase.firestore();