import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const config ={
    apiKey: "AIzaSyAVcZx0JJ1oQ2klqdeVvj0UsTz7zbuJMcs",
    authDomain: "crwn-clothing-8619e.firebaseapp.com",
    projectId: "crwn-clothing-8619e",
    storageBucket: "crwn-clothing-8619e.appspot.com",
    messagingSenderId: "505013063633",
    appId: "1:505013063633:web:82f436b589d9e3f0ab9af0",
    measurementId: "G-5ZZ26YFL74"
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({prompt:'select_account'})
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;