import React from 'react';
import { Container } from 'react-bootstrap'; 
import notFoundImage from '../img/error-404.jpg';

const NotFound = () => {
return (
    <Container className="text-center" style={{ marginTop: '100px' }}>
    <h1>404 - Página no encontrada</h1>
    <img src={notFoundImage} alt="404 - Página no encontrada" style={{ width: '100vw', height: '100vh',position: 'absolute',top:64,left:0,objectFit:'cover'}} />
    <p>La página que estás buscando no existe.</p>
    </Container>
);
};

export default NotFound;
