import React, { createContext, useContext } from 'react'
import { auth } from './firebase';
import {createUserWithEmailAndPassword ,
        signInWithEmailAndPassword,
        signOut,
        onAuthStateChanged} from 'firebase/auth'


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
    //const [user, setUser] = useState(null);
    //const [loading, setLoading] = useState(true);

    /*const login = (user) =>{
        setUser(user)
    }
    const logout =(user)=>{
        setUser(null)
    }*/
    /*useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(user =>{
            setUser(user)
            setLoading(false)
        })

        return unsubscribe
    }, [])
    
    if(loading) return <p> Loading...</p>*/

}
export const UserAuth = ()=>{
    return useContext(AuthContext)
}