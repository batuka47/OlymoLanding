import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBI5IiQaTIQosj4-QIWDT5M8riTys-Hx1U",
  authDomain: "olymo-f5c97.firebaseapp.com",
  projectId: "olymo-f5c97",
  storageBucket: "olymo-f5c97.firebasestorage.app",
  messagingSenderId: "490316071586",
  appId: "1:490316071586:web:c7263a59efd4e20b2fcdfb",
  measurementId: "G-FMEKW592FY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const firestore = getFirestore(app)
const analytics = getAnalytics(app);