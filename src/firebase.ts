import { initializeApp } from 'firebase/app';

// const firebaseConfig = {
//     apiKey: 'AIzaSyCuAjODtxtFWy4D2y1oKySnZglBCTNFj6o',
//     authDomain: 'pizza-33c38.firebaseapp.com',
//     projectId: 'pizza-33c38',
//     storageBucket: 'pizza-33c38.appspot.com',
//     messagingSenderId: '363746346057',
//     appId: '1:363746346057:web:ca32a664c37de312a7ab98',
// };
const firebaseConfig = {
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
    storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_FIREBASE_APP_ID,
};

// eslint-disable-next-line no-unused-vars, @typescript-eslint/no-unused-vars
const app = initializeApp(firebaseConfig);
