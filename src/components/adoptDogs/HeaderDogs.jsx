import Container from 'react-bootstrap/Container';

import {Link} from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from "./../../assets/logo.png";
import "./Dogs.css";



function NavbarDog() {
  
  return (
   
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home"><img src={logo} alt="" className="logoc"/></Navbar.Brand>
        
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
    
          <Nav className="me-auto">
            <Nav.Link href="#home">Inicio</Nav.Link>
            <Nav.Link href="#home">Nosotros</Nav.Link>
            <Nav.Link href="#link">Quienes somos</Nav.Link>            
          </Nav>
        </Navbar.Collapse>
      </Container>
     </Navbar>
   
  );
}

export default NavbarDog;