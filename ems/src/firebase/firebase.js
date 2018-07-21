import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

  // Initialize Firebase
  const config = {
    apiKey: "AIzaSyBocxqIihKEiJXXiRtBvrPBFPnha5gcifI",
    authDomain: "xcdify-ems.firebaseapp.com",
    databaseURL: "https://xcdify-ems.firebaseio.com",
    projectId: "xcdify-ems",
    storageBucket: "xcdify-ems.appspot.com",
    messagingSenderId: "926661272096"
  };
  firebase.initializeApp(config);

  if (!firebase.apps.length) {
    firebase.initializeApp(config);
  }

  const db = firebase.database();
  const auth = firebase.auth();

  export {
    db,
    auth,
  };