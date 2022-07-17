// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "@firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDTnzC8on3j6a5obWlzLyK3Xl3T9CrZ1E4",
  authDomain: "tenor-react.firebaseapp.com",
  projectId: "tenor-react",
  storageBucket: "tenor-react.appspot.com",
  messagingSenderId: "739729848464",
  appId: "1:739729848464:web:c29c03659e1148d7d3c015"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const fireStore = getFirestore(app);