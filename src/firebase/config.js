// Import the functions you need from the SDKs you need
import firebase from 'firebase/app';
import 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyACIQ9WlI71_7RaNt43fA5riRG6HjX6WuE',
  authDomain: 'firestore-crud-fer-r1.firebaseapp.com',
  projectId: 'firestore-crud-fer-r1',
  storageBucket: 'firestore-crud-fer-r1.appspot.com',
  messagingSenderId: '147705078021',
  appId: '1:147705078021:web:3e778a372a30c4b982976c',
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { auth, googleAuthProvider };
