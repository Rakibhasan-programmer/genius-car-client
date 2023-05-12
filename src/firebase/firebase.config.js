// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDMQvAmh_XGekLOf6gRDNnsQ_pw9NPyu00",
  authDomain: "car-doctor-6bd35.firebaseapp.com",
  projectId: "car-doctor-6bd35",
  storageBucket: "car-doctor-6bd35.appspot.com",
  messagingSenderId: "314341626606",
  appId: "1:314341626606:web:9dd7122a6ffae4a2fc19ff"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;