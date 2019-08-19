import React from 'react';
import {connect} from 'react-redux';
import {Navbar, Nav, Container} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faHome, faShoppingCart, faSignInAlt, faUserPlus } from '@fortawesome/free-solid-svg-icons';
import './index.scss';


const Header = (props) => {
    return (
       <Navbar  expand="lg" id="navbar">
           <Container>
                <Link to="/" className="navbar-brand" id="brandText">CASIO</Link>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto linksContainer">
                        <Link to="/" className="nav-link" ><FontAwesomeIcon icon={faHome} /> Home</Link> 
                        <Link to="/your-cart/" className="nav-link"><FontAwesomeIcon icon={faShoppingCart} /> Cart <span id="cartItemCount">[ {props.cartItemCount} ]</span></Link>
                        <Nav.Link href="/login/"><FontAwesomeIcon icon={faSignInAlt} /> Login</Nav.Link>
                        <Nav.Link href="/sign-up/"><FontAwesomeIcon icon={faUserPlus} /> Sign Up</Nav.Link>
                    </Nav>
                </Navbar.Collapse>

           </Container>
       </Navbar>
    )
};

const mapStateToProps = (state) => {
    return {
        cartItemCount: (state.cart.items).length,
    }
}

export default connect(mapStateToProps)(Header);