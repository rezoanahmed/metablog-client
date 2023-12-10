import { createContext, useEffect, useState } from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import {auth} from "../Configurations/firebase/firebase.config"


export const AuthContext = createContext("")
const ContextProvider = ({children}) => {

    const test = "this is a test example"
    const [user,setUser] = useState();
    const [loading,setLoading] = useState();

    // google login
    const googleLogin = () =>{
        setLoading(true);
        const provider = new GoogleAuthProvider();
        return signInWithPopup(auth, provider)
    }

    // register user
    const register = async(email, password) =>{
        setLoading(true);
        const result = await createUserWithEmailAndPassword(auth, email, password);
        return result;
    }

    // login user
    const login = async(email, password) =>{
        setLoading(true);
        const result = await signInWithEmailAndPassword(auth, email, password);
        return result;
    }

    // logout user 
    const logout = async() =>{
        const result = await signOut(auth);
        return result;
    }

    // checking user is logged in or not
    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, (currentUser)=>{
            setUser(currentUser);
            setLoading(false);
        })
        return ()=>{
            unsubscribe();
        }
    },[])

    const methods = {
        test,
        googleLogin,
        register,
        login,
        logout,
        user,
        loading,

    }
    return (
        <AuthContext.Provider value={methods}>
            {children}
        </AuthContext.Provider>
    );
};

export default ContextProvider;