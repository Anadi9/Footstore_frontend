import React from 'react';
import { Card, Button } from 'react-bootstrap';
import ProductImg from './ProductImg';

function ProductCard({product}) {

    return (
    
        <Card className="mx-3 my-3" style={{ width: '12rem' }}>
        <Card.Body>
        <ProductImg item={product} url="products"/>
          <Card.Title>{product.name}</Card.Title>
          <Card.Text>
            {product.description}
            Rs.{product.price}
          </Card.Text>
          <Button size="sm" variant="light" className="btn-outline-success">View</Button>
          <Button size="sm" variant="success">Add to cart</Button>
        </Card.Body>
      </Card>
        
    );
}

export default ProductCard;