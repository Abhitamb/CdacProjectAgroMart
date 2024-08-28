import firebase from "firebase/compat/app";
import "firebase/compat/database";

var firebaseApp = {
  apiKey: "AIzaSyBJTZShewfpUR5vD2GopUMA1e3SISx75qc",
  authDomain: "prodinfo-161fa.firebaseapp.com",
  databaseURL: "https://prodinfo-161fa-default-rtdb.firebaseio.com",
  projectId: "prodinfo-161fa",
  storageBucket: "prodinfo-161fa.appspot.com",
  messagingSenderId: "347306180633",
  appId: "1:347306180633:web:b857bad41843f3ff98ea88",
  measurementId: "G-03FZCR1YKT"
  };

  const app = firebase.initializeApp(firebaseApp);

  export default app.database().ref();
