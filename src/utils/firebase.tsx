import firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyCNW_jOg636V5KXrqJxFOmV6i4q2sVpEz8',
  authDomain: 'react-crud-b64eb.firebaseapp.com',
  databaseURL: 'https://react-crud-b64eb.firebaseio.com',
  projectId: 'react-crud-b64eb',
  storageBucket: 'react-crud-b64eb.appspot.com',
  messagingSenderId: '76311953971',
  appId: '1:76311953971:web:be9547d05bbf3883aad946',
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
export default firebase;
