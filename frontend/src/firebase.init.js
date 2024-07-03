import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyB62sQLMTcpXfs7HvhRXNvTITYwVJQbKnc",
  authDomain: "twitter-860d0.firebaseapp.com",
  projectId: "twitter-860d0",
  storageBucket: "twitter-860d0.appspot.com",
  messagingSenderId: "438542459075",
  appId: "1:438542459075:web:c3497a95a64606e1dc4276",
  measurementId: "G-HHZ6JFQKT9"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
export default auth;