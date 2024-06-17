import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore"


const firebaseConfig = {
    apiKey: "AIzaSyAB5nayk2BYHQlj-BnDB9ASAfDDzNl8bMY",
    authDomain: "pb-react.firebaseapp.com",
    projectId: "pb-react",
    storageBucket: "pb-react.appspot.com",
    messagingSenderId: "82020290579",
    appId: "1:82020290579:web:3b0c8965b645286f8a2fe6",
    measurementId: "G-8P7Q8LLXCY"
};


const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);

export {db};