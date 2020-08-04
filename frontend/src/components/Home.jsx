import React, { useState, useEffect } from 'react';
import { Container, Row } from 'react-bootstrap';
import { getProducts } from './componentApi';
import ProductCard from './ProductCard';

function Home(props) {

    const [productsBySell, setProductsBySell] = useState([]);
    const [productsByArrival, setProductsByArrival] = useState([]);
    const [error, setError] = useState(false);

    const loadProductsBySell = () => {
        getProducts('sold').then(data => {
            if(data.error) {
                setError(data.error)
            } else {
                setProductsBySell(data)
            }
        })
    };

    const loadProductsByArrival = () => {
        getProducts('createdAt').then(data => {
            if(data.error) {
                setError(data.error)
            } else {
                setProductsByArrival(data)
            }
        })
    };

    useEffect(() => {
        loadProductsByArrival()
        loadProductsBySell()
    }, [])

    return (
        <Container fluid className="my-5 py-1">

          <Container className="my-5">
           <h3 className="text-center">New Arrivals</h3>
           <Row className="justify-content-center">
             {productsByArrival.map((product, i) => (
             <ProductCard key={i} product={product}/>
             ))}
           </Row>
           </Container>
           
          <Container className="my-5">
           <h3 className="text-center">Best Sellers</h3>
           <Row className="justify-content-center">
             {productsBySell.map((product, i) => (
             <ProductCard key={i} product={product}/>
              ))}
           </Row>
           </Container> 

        </Container>
    );
}

export default Home;