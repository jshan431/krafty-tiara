//pull in firebase utility libraries
import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyB_CCPtwJygiJVqeijE0IEStAxwSUfP9cE",
    authDomain: "krafty-tiara-db.firebaseapp.com",
    databaseURL: "https://krafty-tiara-db.firebaseio.com",
    projectId: "krafty-tiara-db",
    storageBucket: "krafty-tiara-db.appspot.com",
    messagingSenderId: "1044887104444",
    appId: "1:1044887104444:web:da983ac84113c31d58d9b9",
    measurementId: "G-PMK5VTKF43"
};

// Initialize Firebase
firebase.initializeApp(config);

// Take user auth object from auth library and then store in our database
export const createUserProfileDocument = async (userAuth, additionalData) => {
    // userAuth evaluates to null (logged out) return immediately.
    if (!userAuth) return;
  
    //query into our firestore for the document to see if it already exists
    const userRef = firestore.doc(`users/${userAuth.uid}`);      //query reference
  
    //get snapshot object by using .get() on the reference object
    const snapShot = await userRef.get();
  
    // snapshot object tells us if data exist or not. If it does not exist we'll
    // create a new user in our db. We must use the .set of the reference object 
    // in order to do so.
    if (!snapShot.exists) {
      const { displayName, email } = userAuth;
      const createdAt = new Date();
      try {
        await userRef.set({
          displayName,
          email,
          createdAt,
          ...additionalData
        });
      } catch (error) {
        console.log('error creating user', error.message);
      }
    }
    // return the userRef in case we want to do something with it.
    return userRef;
  };

// make auth and firestore references
export const auth = firebase.auth();
export const firestore = firebase.firestore();

//sign in with google
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;