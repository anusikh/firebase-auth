// Import the functions you need from the SDKs you need
import * as firebase from "firebase";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAOXGiSzw2q9vqbzQQcQw1Ah9JNhFIr-4U",
  authDomain: "fir-auth-ae1b3.firebaseapp.com",
  projectId: "fir-auth-ae1b3",
  storageBucket: "fir-auth-ae1b3.appspot.com",
  messagingSenderId: "482976368667",
  appId: "1:482976368667:web:fed1846695e7bc09c550be",
};

// Initialize Firebase
let app;
if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app();
}

const auth = firebase.auth();

export { auth };
