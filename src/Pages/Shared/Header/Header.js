import React from 'react';
import './Header.css';
import logo from '../../../Images/logo.png';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <>

            <Navbar sticky='top' collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand as={Link} to="/"><img src={logo} alt="" /></Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="ms-auto">
                            <Nav.Link className='menu' as={Link} to="/">Home</Nav.Link>
                            <Nav.Link className='menu' as={Link} to="/inventory">Inventory</Nav.Link>
                        </Nav>
                        <Nav>
                            <Nav.Link className='menu' as={Link} to="/blog">Blog</Nav.Link>
                            <Nav.Link className='menu' as={Link} to="/login">
                                Login
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;