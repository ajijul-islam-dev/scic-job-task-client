import React, { Children, createContext } from 'react';
export const AuthContext = createContext(null)
const AuthProvider = ({children}) => {

    const authInfo = {user : "Azizul"}
    return (
        
        <div>
            <AuthContext.Provider value={authInfo}>
                {children}
            </AuthContext.Provider>
        </div>
    );
};

export default AuthProvider;