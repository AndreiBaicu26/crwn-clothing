import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const config = {
    apiKey: "AIzaSyBAmQ0EJMB0nTwUrq_0UxOoHey103nqYa0",
    authDomain: "crwn-db-b7065.firebaseapp.com",
    databaseURL: "https://crwn-db-b7065.firebaseio.com",
    projectId: "crwn-db-b7065",
    storageBucket: "crwn-db-b7065.appspot.com",
    messagingSenderId: "108095010233",
    appId: "1:108095010233:web:c8fcbcc3a7a7b214f6f268"
  }

  firebase.initializeApp(config);

  
  export const auth = firebase.auth();
  export const firestore = firebase.firestore();
      

  export const createUserProfileDocument = async(userAuth, additionalData )=>{
    if(!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);

    const snapShot = await userRef.get();
    if(!snapShot.exists){
      const { email, displayName} = userAuth;
      const createdAt = new Date();
      
      try{
        await userRef.set({
          displayName, 
          email,
          createdAt,
          ...additionalData
        })
      }catch(err){
        console.log('err at creating user', err.message)
      }


    }
    return userRef;
    

  }

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt : 'select_account'});
  export const signInWithGoolge = () => auth.signInWithPopup(provider);

  export default firebase;