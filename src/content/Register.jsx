import React, { useState, useContext } from 'react';
import { Form, Button, Container } from 'react-bootstrap';
import UserContext from '../context/UserContext';
import { useHistory } from 'react-router-dom';
import Axios from 'axios';
import ErrorMsg from './../misc/ErrorMsg';

function Register(props) {
    const [ name, setName ] = useState();
    const [ email, setEmail ] = useState();
    const [ password, setPassword ] = useState();
    const [ passwordCheck, setPasswordCheck ] = useState();
    const [ error, setError] = useState();

    const { setUserData } = useContext(UserContext);
    const history = useHistory();

    const onSubmit = async (e) => {
        e.preventDefault();

        try {
          const newUser = { name, email, password, passwordCheck };
          await Axios.post("http://localhost:5000/users/register", newUser);
          const loginRes = await Axios.post("http://localhost:5000/users/login", {
            email,
            password,
          });
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
        <h1>Register</h1>
        {error && (
          <ErrorMsg message={error} clearError={() => setError(undefined)} />
        )}
        <Form onSubmit={onSubmit}>
        <Form.Group controlId="formBasicName">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" placeholder="Enter name" 
          onChange={(e) => setName(e.target.value)} />
        </Form.Group>

        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" 
          onChange={(e) => setEmail(e.target.value)} />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>
      
        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Enter password" 
          onChange={(e) => setPassword(e.target.value)} />
          <Form.Control type="password" placeholder="Verify password" 
          onChange={(e) => setPasswordCheck(e.target.value)} />
        </Form.Group>
        <Button variant="primary" type="submit">
          Register
        </Button>
      </Form>
      </Container>
    );
}

export default Register;