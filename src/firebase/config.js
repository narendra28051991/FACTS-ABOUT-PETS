import firebase from 'firebase/app'

const firebaseConfig = {
    apiKey: "AIzaSyC-gv4dSpuOQuvfUIFywT-ERqV7ZGh6PJc",
    authDomain: "pet-facts.firebaseapp.com",
    projectId: "pet-facts",
    storageBucket: "pet-facts.appspot.com",
    messagingSenderId: "344789021921",
    appId: "1:344789021921:web:bdf698b2059116aff9f3a0"
  };

// init firebase
firebase.initializeApp(firebaseConfig)