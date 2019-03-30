import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

// Initialize Firebase
 var config = {
    apiKey: "AIzaSyCFgE_rnDgTOuEcuFos41LCA9dU7Xm9mKc",
    authDomain: "myfirstfirebaseproject-22ea5.firebaseapp.com",
    databaseURL: "https://myfirstfirebaseproject-22ea5.firebaseio.com",
    projectId: "myfirstfirebaseproject-22ea5",
    storageBucket: "myfirstfirebaseproject-22ea5.appspot.com",
    messagingSenderId: "481119169829"
  };
  firebase.initializeApp(config);
  firebase.firestore().settings({timestampsInSnapshots : true});

  export default firebase;