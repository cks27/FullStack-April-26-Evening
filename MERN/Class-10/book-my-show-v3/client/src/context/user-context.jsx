import React, { createContext, useEffect, useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router';

const UserContext = createContext({
    isLoggedIn: false,
    role: null,
    email: null,
    loginUser: () => { }
});

export const UserContextProvider = (props) => {

    const [user, setUser] = useState(null);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const navigate = useNavigate();

    const loginUser = async (userCredentials) => {
        try {
            const res = await axios.post('http://localhost:8080/users/login', { ...userCredentials });
            localStorage.setItem('token', res.data?.payload?.token);
            setIsLoggedIn(true);
            navigate('/');
        }
        catch (err) {
            console.log(err);
        }
    }

    useEffect(() => {
        (async () => {
            try {
                const res = await axios.get('http://localhost:8080/users/profile',
                    {
                        headers: {
                            Authorization: `Bearer ${localStorage.getItem('token')}`
                        }
                    }
                )
                setUser(res.data?.payload);
            }
            catch (err) {
                console.log(err);
            }
        })()
    }, [isLoggedIn]);

    const context = {
        loginUser: loginUser,
        isLoggedIn: isLoggedIn,
        email: user?.email,
        role: user?.role
    }

    return (
        <UserContext.Provider value={context}>
            {props.children}
        </UserContext.Provider>
    )
}

export default UserContext