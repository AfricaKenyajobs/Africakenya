import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";
const firebaseConfig = {
  apiKey: "AIzaSyASln99PrigGcoQDLXfa8mX3D7fzV-BK-M",
  authDomain: "africakenya-23155.firebaseapp.com",
  projectId: "africakenya-23155",
  storageBucket: "africakenya-23155.firebasestorage.app",
  messagingSenderId: "317714881079",
  appId: "1:317714881079:web:eecf8ceb647d2de9e2bdb2"
};
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
