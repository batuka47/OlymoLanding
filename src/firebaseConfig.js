// Import the necessary functions from Firebase SDK
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCBnzlWwp2pQZsfucyRTrGLLyA-fAVafhA",
  authDomain: "exp-pre-register.firebaseapp.com",
  projectId: "exp-pre-register",
  storageBucket: "exp-pre-register.firebasestorage.app",
  messagingSenderId: "745272449369",
  appId: "1:745272449369:web:55ffd2e065f3d1738c1448",
  measurementId: "G-8HGQ54V97K"
};

// Initialize Firebase app
const app = initializeApp(firebaseConfig);

// Initialize Firestore
const db = getFirestore(app);

// Export the db object for use in other files
export { db };
