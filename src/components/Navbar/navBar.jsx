import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import CartWidget from "../CartWidget/CartWidget";
import logo from "../../../public/altoque.png"; // Asegúrate de que la ruta de la imagen sea correcta

const NavBar = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" className="fixed-top">
      <Container>
        <Navbar.Brand href="/">
        <img src={logo} alt="Logo" className="logo" />
          Al toque perro
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="nav-center">
            <Nav.Link href="/">Inicio</Nav.Link>
            <Nav.Link href="/about">Productos</Nav.Link>
            <Nav.Link href="/services">Ofertas</Nav.Link>
            <Nav.Link href="/contact">Contacto</Nav.Link>
          </Nav>
          <CartWidget />
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
