import * as firebase from 'firebase'

  const config = {
    apiKey: "AIzaSyA8nlNMTwtwjARqmHpoSwx4pTpvCXKFmKE",
    authDomain: "instacool-bc468.firebaseapp.com",
    databaseURL: "https://instacool-bc468.firebaseio.com",
    projectId: "instacool-bc468",
    storageBucket: "instacool-bc468.appspot.com",
    messagingSenderId: "878429344405",
    appId: "1:878429344405:web:b2445e96118ecdc5"
  };
  
  firebase.initializeApp(config);

  export const auth = firebase.auth()
  export const db = firebase.firestore()
  export const storage = firebase.storage()