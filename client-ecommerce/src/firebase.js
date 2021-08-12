import * as firebase from "firebase";

// Credenciales Firebase SDK
const firebaseConfig = {
    apiKey: "AIzaSyCV6XyBte_5d-YpqfZUGGXSyag_lnoDOI8",
    authDomain: "fullstack-ecommerce-29c59.firebaseapp.com",
    projectId: "fullstack-ecommerce-29c59",
    storageBucket: "fullstack-ecommerce-29c59.appspot.com",
    messagingSenderId: "1033253865265",
    appId: "1:1033253865265:web:f9560ab1f3fd8d86635210"
  };

  //Initialize app with Firebase
  firebase.initializeApp(firebaseConfig);

  // Export
  export const auth = firebase.auth();
  export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();