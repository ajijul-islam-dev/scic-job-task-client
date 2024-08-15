import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { createContext } from 'react';
import auth from '../firebase/firebase.config';
export const AuthContext = createContext(null)
const AuthProvider = ({children}) => {

    const googleSignIn = ()=>{
        return signInWithPopup(auth,new GoogleAuthProvider())
    }

    const authInfo = {googleSignIn}
    return (
        
        <div>
            <AuthContext.Provider value={authInfo}>
                {children}
            </AuthContext.Provider>
        </div>
    );
};

export default AuthProvider;