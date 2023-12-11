// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD0o2VaI_-Tsv1hRAT_fR0UZJakHARNkuk",
  authDomain: "book-inventory-project.firebaseapp.com",
  projectId: "book-inventory-project",
  storageBucket: "book-inventory-project.appspot.com",
  messagingSenderId: "216136416003",
  appId: "1:216136416003:web:bb0ce51ce64cb877c9c736",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;
