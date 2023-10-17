import {getApp, getApps, initializeApp} from 'firebase/app'
import {getFirestore} from 'firebase/firestore'
import {getStorage} from 'firebase/storage'
const firebaseConfig = {
    apiKey: "AIzaSyCbICrGPJcIGZb5T8tEoVDdPkvFT7TGZg0",
    authDomain: "restaurant-1cd8c.firebaseapp.com",
    databaseURL: "https://restaurant-1cd8c-default-rtdb.firebaseio.com",
    projectId: "restaurant-1cd8c",
    storageBucket: "restaurant-1cd8c.appspot.com",
    messagingSenderId: "519275957536",
    appId: "1:519275957536:web:1454a34f0779f061715b45"
  };
  const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);
  const firestore = getFirestore(app)
  const storage = getStorage(app)
  export {app,firestore,storage}
