import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

require('dotenv').config();

const config = {
    apiKey: process.env.REACT_APP_APIKEY,
    authDomain: process.env.REACT_APP_AUTHDOMAIN,
    databaseURL: process.env.REACT_APP_DB,
    projectId: process.env.REACT_APP_PID,
    storageBucket: process.env.REACT_APP_SB,
    messagingSenderId: process.env.REACT_APP_SID,
    appId: process.env.REACT_APP_APPID,
    measurementId:process.env.REACT_APP_MID
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

//Sign up using Google
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({
    promt: "select_account",
});

//Does User Already Exist
export const createUserProfileDocument =async (userAuth: any) => {
    if(!userAuth) return;

    const userReference = firestore.doc(`users/${userAuth.uid}`);
    const snapShot = await userReference.get();
    if(!snapShot.exists) {
        const {displayName, email} = userAuth;
        const createdAt = new Date();
        try {
            await userReference.set({
                displayName,
                email,
                createdAt
            })
        } catch (error) {
            console.log(error)
        }
    }
    return userReference;
}

export const signInWithGoogle = () => auth.signInWithPopup(provider);
