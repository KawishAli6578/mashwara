import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import {getFirestore} from 'firebase/firestore';
import {initializeApp} from 'firebase/app';
import {getAuth} from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyApBzczfObsHK-EMVR3AKZjv_H6ktUYDXs',
  authDomain: 'mashwara-ff450.firebaseapp.com',
  projectId: 'mashwara-ff450',
  storageBucket: 'mashwara-ff450.appspot.com',
  messagingSenderId: '801493290360',
  appId: '1:801493290360:web:7351f64abccab7d2910c8d',
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
export {auth, db};
