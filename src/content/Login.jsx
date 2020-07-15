import React, { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { Form, Button, Container } from 'react-bootstrap';
import UserContext from '../context/UserContext';
import Axios from 'axios';
import ErrorMsg from './../misc/ErrorMsg';


function Login(props) {
    const [ email, setEmail ] = useState();
    const [ password, setPassword ] = useState();
    const [ error, setError] = useState();

    const { setUserData } = useContext(UserContext);
    const history = useHistory();

    const onSubmit = async (e) => {
        e.preventDefault();

        try {
          const loginUser = { email, password };
          const loginRes = await Axios.post("http://localhost:5000/users/login", 
          loginUser
          );
          setUserData({
            token: loginRes.data.token,
            user: loginRes.data.user,
          });
          localStorage.setItem("auth-token", loginRes.data.token);
          history.push("/");
        } catch (err) {
          err.response.data.msg && setError(err.response.data.msg);
        }
    }; 

    return (
        <Container>
        <h1>Log In</h1>
        {error && (
          <ErrorMsg message={error} clearError={() => setError(undefined)} />
        )}
        <Form onSubmit={onSubmit}>

        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" 
          onChange={(e) => setEmail(e.target.value)} />
        </Form.Group>
      
        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Enter password" 
          onChange={(e) => setPassword(e.target.value)} />
        </Form.Group>
        <Button variant="primary" type="submit">
          Register
        </Button>
      </Form>
      </Container>
    );
}

export default Login;