import * as firebase from 'firebase';

// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyCXoeLVSeoTw40e2AORLRV0tIMwpZpkYng",
  authDomain: "ack-f60dc.firebaseapp.com",
  databaseURL: "https://hack-f60dc.firebaseio.com",
  storageBucket: "hack-f60dc.appspot.com"
};

firebase.initializeApp(firebaseConfig);


// Listen for authentication state to change.
firebase.auth().onAuthStateChanged((user) => {
  if (user != null) {
    console.log("We are authenticated now!");
  }

  // Do other things
});