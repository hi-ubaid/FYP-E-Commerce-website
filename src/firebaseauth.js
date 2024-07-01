// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "Sample",       //use own api key
  authDomain: "Sample",               //useownauthdomain
  projectId: "Sample",                                //use own projectid
  storageBucket: "Sample",                //use own storage bucket here
  messagingSenderId: "Sample",                      //use own 
  appId: "sample"         //useown
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
export {auth, provider};