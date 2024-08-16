import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import Auth from "../firebase/firebase.config";
export const AuthContext = createContext(null);
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState({});

  // google popup login
  const googleSignIn = () => {
    return signInWithPopup(Auth, new GoogleAuthProvider());
  };

  // create user with Email and Password
  const createUserWithEmail = (email, password) => {
    return createUserWithEmailAndPassword(Auth, email, password);

  };

  // Login with Email and password
  const loginWithEmail = (email,password)=>{
    return signInWithEmailAndPassword(Auth,email,password);
  }


  // get current user
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(Auth, (currentUser) => {
      setUser(currentUser);
    });
    return unSubscribe;
  }, [user]);

  const authInfo = { user, googleSignIn, createUserWithEmail,loginWithEmail };
  return (
    <div>
      <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
    </div>
  );
};

export default AuthProvider;
