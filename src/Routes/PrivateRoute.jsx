import React, { Children, useContext } from 'react';
import { AuthContext } from '../providers/AuthProvider';
import { useNavigate } from 'react-router-dom';

const PrivateRoute = ({children}) => {
    const navigate = useNavigate()
    const {user} = useContext(AuthContext);
    if(!user){
       return navigate("/login");
    }
    return children;
};

export default PrivateRoute;