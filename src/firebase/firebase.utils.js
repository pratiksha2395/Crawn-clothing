//here we are importing the products from firebase
import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

//Add the key we get when we create project in firebase
const config ={
    apiKey: "AIzaSyAVcZx0JJ1oQ2klqdeVvj0UsTz7zbuJMcs",
    authDomain: "crwn-clothing-8619e.firebaseapp.com",
    projectId: "crwn-clothing-8619e",
    storageBucket: "crwn-clothing-8619e.appspot.com",
    messagingSenderId: "505013063633",
    appId: "1:505013063633:web:82f436b589d9e3f0ab9af0",
    measurementId: "G-5ZZ26YFL74"
}

export const createUserProfileDocument = async (userAuth, additionalData)=>{
    if(!userAuth) return

    // const userRef= firestore.doc('/users/hjfdskffg344')
    const userRef= firestore.doc(`users/${userAuth.uid}`); //This method gives the current place of data that we are querying for
    console.log(userRef)
    const snapshot = await userRef.get() //this method is use to take the user data
    //console.log(firestore.doc('/users/hjfdskffg344'))
   

    if(!snapshot.exists){
        const {displayName, email} = userAuth
        const createdAt = new Date()
        try {
            await userRef.set({
                displayName, email, createdAt, ...additionalData
            })
        } catch (error) {
            console.log("error creating user",error.message)
        }
    }
    return userRef;
}

//initialising the firebase 
firebase.initializeApp(config);

//adding the authentication from firebase
export const auth = firebase.auth();
//adding cloud firestore
export const firestore = firebase.firestore();

//creating the instance of google provider
const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({prompt:'select_account'})
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;