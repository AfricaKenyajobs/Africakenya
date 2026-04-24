import { getFirestore, collection, addDoc } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";

// 🔥 YOUR FIREBASE CONFIG (replace if already in firebase.js)
const firebaseConfig = {
  apiKey: "YOUR_KEY",
  authDomain: "YOUR_PROJECT.firebaseapp.com",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_PROJECT.appspot.com",
  messagingSenderId: "YOUR_SENDER_ID",
  appId: "YOUR_APP_ID"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// ======================
// APPLY BUTTON FIX
// ======================
document.querySelectorAll(".apply").forEach(btn => {
  btn.addEventListener("click", () => {
    alert("Application sent (demo). Next step: connect to Firebase applications collection.");
  });
});

// ======================
// REPORT BUTTON FIX
// ======================
document.querySelectorAll(".report").forEach(btn => {
  btn.addEventListener("click", async () => {
    const reportText = prompt("Describe the issue:");

    if (!reportText) return;

    try {
      await addDoc(collection(db, "reports"), {
        message: reportText,
        time: new Date().toISOString()
      });

      alert("Report submitted successfully!");
    } catch (error) {
      alert("Error submitting report. Check Firebase setup.");
      console.log(error);
    }
  });
});

// ======================
// QUESTION SYSTEM
// ======================
window.submitQuestion = async function () {
  const input = document.getElementById("questionInput");

  if (!input.value) return;

  try {
    await addDoc(collection(db, "questions"), {
      message: input.value,
      time: new Date().toISOString()
    });

    alert("Question submitted!");
    input.value = "";
  } catch (err) {
    alert("Error submitting question.");
  }
};
