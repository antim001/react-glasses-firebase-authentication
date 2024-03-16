import {createContext,useState,useEffect} from 'react';
import { GoogleAuthProvider ,signInWithPopup,signInWithEmailAndPassword,
    createUserWithEmailAndPassword,onAuthStateChanged, signOut} from "firebase/auth";
import { auth } from './../firebase/firebase.config';
export const AuthContext=createContext(null)
const googleProvider = new GoogleAuthProvider();
const AuthProvider = ({children}) => {
    const [user,setUser]=useState({})
    const googleLogin=()=>{
       return signInWithPopup(auth, googleProvider)
    }
    const createUser=(email,password)=>{
       return createUserWithEmailAndPassword(auth, email, password);
    }
    const signIn=(email,password)=>{
      return signInWithEmailAndPassword(auth, email, password)
    }
    const logOut=()=>{
        return signOut(auth);
    }
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            setUser(user);
        });
        return () => {
            unsubscribe();
        };
    }, []);
    console.log(user);
    
    const authentication={
        googleLogin,
        createUser,signIn,logOut,user
    }
    return (
        <AuthContext.Provider value={authentication}>
           {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;