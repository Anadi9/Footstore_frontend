import React from 'react';
import { Card, ListGroup, Container, Badge } from 'react-bootstrap';
import { isAuthenticated } from '../auth/userApi';
import { Link } from 'react-router-dom';

function AdminDashboard(props) {
    const {user: { name, email, isAdmin }} = isAuthenticated();
    return (
        <Container fluid className="my-5 py-3">

            <h1 className="text-center">Admin Dashboard</h1>

            <div>
                <Link to="/create/category"><Badge variant="success">Add Category</Badge></Link><br/>
                <Link to="/create/product"><Badge variant="success">Add Product</Badge> </Link>
            </div>

            <Container className="mx-auto">

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

export default AdminDashboard;