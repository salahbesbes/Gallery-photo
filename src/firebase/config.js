import * as firebase from "firebase/app";
import "firebase/storage";
import "firebase/firestore";

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyCQd9cMssdw18sSgcyyJMd3MbBtFW7zdkg",
  authDomain: "photo-gallery-c2ae4.firebaseapp.com",
  databaseURL: "https://photo-gallery-c2ae4.firebaseio.com",
  projectId: "photo-gallery-c2ae4",
  storageBucket: "photo-gallery-c2ae4.appspot.com",
  messagingSenderId: "498098393749",
  appId: "1:498098393749:web:1a42d6ccba94346ef5419c",
};






// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// Initialize storage
const projectstorage = firebase.storage();
// Initialize firestore
const projectfirestore = firebase.firestore();
// create a firebase server timestamp
const timestamp = firebase.firestore.FieldValue.serverTimestamp;
export {projectfirestore, projectstorage, timestamp };
