import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

// Firebase Keys (DO NOT TOUCH)
const firebaseConfig = {
  apiKey: 'AIzaSyDCT5lk4I09tlMJMwrANtYenAOZ47j-24I',
  authDomain: 'revelry-94afb.firebaseapp.com',
  projectId: 'revelry-94afb',
  storageBucket: 'revelry-94afb.appspot.com',
  messagingSenderId: '533317067791',
  appId: '1:533317067791:web:8f8b13e77dfc4f92c26f7a',
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
