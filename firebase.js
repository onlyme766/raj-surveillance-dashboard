import { initializeApp } from "https://www.gstatic.com/firebasejs/9.0.0/firebase-app.js";
import { getDatabase, ref, onValue } from "https://www.gstatic.com/firebasejs/9.0.0/firebase-database.js";

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

const newsRef = ref(db, 'news');
onValue(newsRef, (snapshot) => {
  const data = snapshot.val();
  // Render news here
});
