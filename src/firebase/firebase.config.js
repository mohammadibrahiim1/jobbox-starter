// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyA6djClK-Nm74pGcQ3O4lT90y7jpiDwt6I",
//   authDomain: "my-portfolio-e5d60.firebaseapp.com",
//   projectId: "my-portfolio-e5d60",
//   storageBucket: "my-portfolio-e5d60.appspot.com",
//   messagingSenderId: "1030266215850",
//   appId: "1:1030266215850:web:79a59114c77b76cc6e9fd3",
//   measurementId: "G-0EMCF5QSS2",
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
// console.log(analytics);

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA_0hxaK7Di2htgjLu8qehbDzLbCRIxRco",
  authDomain: "ai-tool-project.firebaseapp.com",
  projectId: "ai-tool-project",
  storageBucket: "ai-tool-project.appspot.com",
  messagingSenderId: "170772501815",
  appId: "1:170772501815:web:ab06af34f96b88cac4f6b2",
  measurementId: "G-TJTKB376H4",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
console.log(analytics);
const auth = getAuth(app);

export default auth;
