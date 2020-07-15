import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import UserContext from '../context/UserContext';

function AuthOptions(props) {
    const { userData, setUserData } = useContext(UserContext);

    const history = useHistory();

    const onRegister = () => history.push("/register");
    
    const onLogin = () => history.push("/login");

    const onLogout = () => {
        setUserData({
            token: undefined,
            user: undefined,
        });
        localStorage.setItem('auth-token', "");
    };
    return (
        <div>
        {userData.user ? (
            <Button onClick={onLogout}>Log out</Button>
        ): (
            <div>
            <Button onClick={onRegister}>Register</Button>
            <Button onClick={onLogin}>Log in</Button>
        </div>
        )}
        </div>
    );
}

export default AuthOptions;