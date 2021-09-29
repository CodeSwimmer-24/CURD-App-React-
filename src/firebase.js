// // import * as firebase from 'firebase';


// const firebaseConfig = {
//     apiKey: "AIzaSyCqu9U-nnUwvtkYP9nAd_qNUd6tdqFESYQ",
//     authDomain: "crud-app-e1506.firebaseapp.com",
//     projectId: "crud-app-e1506",
//     storageBucket: "crud-app-e1506.appspot.com",
//     messagingSenderId: "548699792435",
//     appId: "1:548699792435:web:6cae4e29495341ccd92f46",
//     measurementId: "G-VQ1MT5GM7R"
//   };

//   const firebaseApp = firebase.initializeApp(firebaseConfig);
//   const db = firebaseApp.firestore();
//   export { db };

// import firebase from "firebase";
import firebase from "firebase/compat/app";
import "firebase/compat/database";

var config = {
    apiKey: "AIzaSyCqu9U-nnUwvtkYP9nAd_qNUd6tdqFESYQ",
  authDomain: "crud-app-e1506.firebaseapp.com",
  projectId: "crud-app-e1506",
  storageBucket: "crud-app-e1506.appspot.com",
  messagingSenderId: "548699792435",
  appId: "1:548699792435:web:6cae4e29495341ccd92f46",
  measurementId: "G-VQ1MT5GM7R"
  };
  // Initialize Firebase
  
  const fireDb = firebase.initializeApp(config);
//   var storage = app.storage();

  export default fireDb.database().ref();