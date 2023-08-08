import React, { createContext, useContext } from 'react'
import { auth } from './firebase';
import {createUserWithEmailAndPassword} from 'firebase/auth'


 const AuthContext = createContext();

 export const AuthProvider = ({children}) =>{

    const createUser = (email, password)=>{
        return createUserWithEmailAndPassword(auth , email, password)
    }
    
    return (
        <AuthContext.Provider value={{createUser}}>
            {children}
        </AuthContext.Provider>
    )

}
export const UserAuth = ()=>{
    return useContext(AuthContext)
}