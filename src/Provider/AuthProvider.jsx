import {createContext,useState,useEffect} from 'react';
import { GoogleAuthProvider ,signInWithPopup,signInWithEmailAndPassword,
    createUserWithEmailAndPassword,onAuthStateChanged, signOut} from "firebase/auth";
import { auth } from './../firebase/firebase.config';
export const AuthContext=createContext(null)
const googleProvider = new GoogleAuthProvider();
const AuthProvider = ({children}) => {
    const [user,setUser]=useState({})
    const [loading,setLoading]=useState(true);
    const googleLogin=()=>{
        setLoading(true)
       return signInWithPopup(auth, googleProvider)
    }
    const createUser=(email,password)=>{
        setLoading(true)
       return createUserWithEmailAndPassword(auth, email, password);
    }
    const signIn=(email,password)=>{
        setLoading(true)
      return signInWithEmailAndPassword(auth, email, password)
    }
    const logOut=()=>{
        return signOut(auth);
    }
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            setUser(user);
            setLoading(false);
        });
        return () => {
            unsubscribe();
        };
    }, []);
    console.log(user);
    
    const authentication={
        googleLogin,
        createUser,signIn,logOut,user,loading
    }
    return (
        <AuthContext.Provider value={authentication}>
           {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;