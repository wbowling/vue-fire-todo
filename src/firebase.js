import Firebase from 'firebase';

const config = {
  apiKey: 'AIzaSyC7_Vdy6QY2Q-TgzdeHEkr1S8hT3ryuwjU',
  authDomain: 'testing-a1a24.firebaseapp.com',
  databaseURL: 'https://testing-a1a24.firebaseio.com',
  projectId: 'testing-a1a24',
  storageBucket: 'testing-a1a24.appspot.com',
  messagingSenderId: '4794847915',
};

const app = Firebase.initializeApp(config);
const db = app.database();

export default db;
