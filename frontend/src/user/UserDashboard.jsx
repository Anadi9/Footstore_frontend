import React from 'react';
import { Card, ListGroup, Container } from 'react-bootstrap';
import { isAuthenticated } from './../auth/index';

function UserDashboard(props) {
    const {user: { name, email, isAdmin }} = isAuthenticated();
    return (
        <Container fluid className="my-5 py-3">
            <h1 className="text-center">User Dashboard</h1>
            <Container className="my-4 mx-auto">
            <Card style={{ width: '100%' }}>
            <Card.Header><strong className="h5">User Information</strong></Card.Header>
              <ListGroup variant="flush">
                <ListGroup.Item><strong>Name:</strong>{name}</ListGroup.Item>
                <ListGroup.Item><strong>Email:</strong>{email}</ListGroup.Item>
                <ListGroup.Item><strong>Role:</strong>{isAdmin === true ? 'Admin' : 'Registered User' } </ListGroup.Item>
              </ListGroup>
            </Card>
            </Container>
        </Container>
    );
}

export default UserDashboard;