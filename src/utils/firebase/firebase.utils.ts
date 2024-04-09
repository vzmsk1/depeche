import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword
} from "firebase/auth";
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";
import { User } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDlX34ZICPSiH79motxjl6HtwM_gsyCmtU",
  authDomain: "depeche-cfa55.firebaseapp.com",
  projectId: "depeche-cfa55",
  storageBucket: "depeche-cfa55.appspot.com",
  messagingSenderId: "785531380861",
  appId: "1:785531380861:web:8b35deb2f31928b2793d14",
};

const firebaseApp = initializeApp(firebaseConfig);

const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () =>
  signInWithPopup(auth, googleProvider);
export const signInWithGoogleRedirect = () =>
  signInWithRedirect(auth, googleProvider);

export const db = getFirestore();

export async function createUserDocumentFromAuth(userAuth: User, additionalInformation = {}) {
  const userDocRef = doc(db, "users", userAuth.uid);

  const userSnapshot = await getDoc(userDocRef);

  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
        ...additionalInformation
      });
    } catch (error) {
      if (error instanceof Error) console.log(error.message);
    }
  }

  return userDocRef;
};

export async function createAuthUserWithEmailAndPassword(email: string, password: string) {
  return await createUserWithEmailAndPassword(auth, email, password)
}

export async function signInAuthUserWithEmailAndPassword(email: string, password: string) {
  return await signInWithEmailAndPassword(auth, email, password)
}