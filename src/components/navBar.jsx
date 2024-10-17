import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import CartWidget from "./CartWidget/CartWidget";
import logo from "../img/altoque.png";
import '../styles/navBar.css'



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
          <Nav className name="nav-center">
            <Nav.Link href="/">Inicio</Nav.Link>
            <Nav.Link href="/productos">Productos</Nav.Link>
            <Nav.Link href="/Ofertas">Ofertas</Nav.Link>
            <Nav.Link href="/contacto">Contacto</Nav.Link>
          </Nav>
          <CartWidget />
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
