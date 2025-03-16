import firebase from 'firebase/app';
import 'firebase/auth';

// Substitua com suas credenciais do Firebase
const firebaseConfig = {
  apiKey: "SUA_API_KEY",
  authDomain: "seu-projeto.firebaseapp.com",
  projectId: "seu-projeto",
  storageBucket: "seu-projeto.appspot.com",
  messagingSenderId: "seu-messagingSenderId",
  appId: "seu-appId"
};

firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();

export { auth };
