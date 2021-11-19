import React, { useEffect } from 'react';
import { useHistory, useLocation, useParams } from 'react-router';
import From from '../components/auth/Form';
import useAuth from '../hooks/useAuth';

const Auth = () => {
    const {path}=useParams()
    const {state}=useLocation()
    const history = useHistory()
    const {user:{token}}=useAuth()
    useEffect(() => {
        const pathname=state?.from?.pathname
        console.log("🚀 ~ file: Auth.js ~ line 13 ~ useEffect ~ pathname", pathname)
        if (token && pathname) {
            history.replace(pathname)
        }else if(token){
            history.replace('/')
        }
    }, [token])
    return (
        <div>
            <From path={path}/>
        </div>
    );
};

export default Auth;