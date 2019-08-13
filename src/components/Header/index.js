import React from 'react';
import {Navbar, Nav, Container} from 'react-bootstrap';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faHome, faShoppingCart, faSignInAlt, faUserPlus } from '@fortawesome/free-solid-svg-icons';
import './index.scss';


const Header = (props) => {
    return (
       <Navbar  expand="lg" id="navbar">
           <Container>
                <Navbar.Brand href="/" id="brandText">CASIO</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto linksContainer">
                        <Nav.Link href="/" ><FontAwesomeIcon icon={faHome} /> Home</Nav.Link> 
                        <Nav.Link href="/cart/"><FontAwesomeIcon icon={faShoppingCart} /> Cart <span id="cartItemCount">(0)</span></Nav.Link>
                        <Nav.Link href="/login/"><FontAwesomeIcon icon={faSignInAlt} /> Login</Nav.Link>
                        <Nav.Link href="/sign-up/"><FontAwesomeIcon icon={faUserPlus} /> Sign Up</Nav.Link>
                    </Nav>
                </Navbar.Collapse>

           </Container>
       </Navbar>
    )
};

export default Header;