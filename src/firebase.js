import { initializeApp } from "firebase/app";
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged,
        signOut , signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup} from 'firebase/auth'
import { useEffect, useState } from "react";
import { setCart } from "./redux/cartSlice";
import { store } from "./redux/store";


const firebaseConfig = {

  apiKey: "AIzaSyDesTpGWaYdOBj3J6hUpC4fVstjqCDze9g",

  authDomain: "e-commerce-6d0fb.firebaseapp.com",

  projectId: "e-commerce-6d0fb",

  storageBucket: "e-commerce-6d0fb.appspot.com",

  messagingSenderId: "614596183484",

  appId: "1:614596183484:web:3b39e9c484d5ca353217b9"

};


// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();


export function signWithPopUp(){
  const provider = new GoogleAuthProvider();
  return signInWithPopup(auth, provider)
}


export function signUp(email, password){
  return createUserWithEmailAndPassword(auth, email, password)
}


export async function logOut(){
  localStorage.removeItem("cartItem")
  return signOut(auth)
} 

export function  signIn (email,password){
  return signInWithEmailAndPassword(auth, email , password)
}

export function useAuth (){
  const[currentUser, setCurrentUser] = useState()

  useEffect(() => {
      const unsubscribe = onAuthStateChanged(auth, user => setCurrentUser(user))
      return unsubscribe
  }, [])
  return currentUser;
}