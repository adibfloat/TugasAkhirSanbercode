import firebase from '@react-native-firebase/app';

const firebaseConfig = {
  apiKey: 'AIzaSyBW4X8Eu_GLUloKjxkyaj2BngXrKjJyLGk',
  authDomain: 'tugasakhirsanbercode.firebaseapp.com',
  projectId: 'tugasakhirsanbercode',
  storageBucket: 'tugasakhirsanbercode.appspot.com',
  messagingSenderId: '771540397104',
  appId: '1:771540397104:web:13b5937f902f0ed44751f5',
};

if (!firebase.app.length) {
  firebase.initializeApp(firebaseConfig);
}

const FIREBASE = firebase;

export default FIREBASE;
