import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyAY-RB8vIi15DjJw9FyXbiCRe-3oELonQU",
    authDomain: "twitter-clone-b7dea.firebaseapp.com",
    projectId: "twitter-clone-b7dea",
    storageBucket: "twitter-clone-b7dea.appspot.com",
    messagingSenderId: "540152114908",
    appId: "1:540152114908:web:fd760a03c4631e2e4ace19",
    measurementId: "G-9TGK3DEB9Y"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();

  export default db;