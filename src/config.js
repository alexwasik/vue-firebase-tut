// Initialize Firebase
import Firebase from 'firebase';

var config = {
  apiKey: "YourAPIKey",
  authDomain: "firebase1234-5.firebaseapp.com",
  databaseURL: "https://firebase1234-5.firebaseio.com",
  projectId: "firebase1234-5",
  storageBucket: "firebase1234-5.appspot.com",
  messagingSenderId: "12345678900"
};


let app = Firebase.initializeApp(config);
let db = app.database();
let articlesRef = db.ref('articles');

export default articlesRef;
