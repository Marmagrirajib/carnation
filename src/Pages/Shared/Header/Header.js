import React from 'react';
import './Header.css';
import logo from '../../../Images/logo.png';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
import { signOut } from 'firebase/auth';

const Header = () => {
    const [user] = useAuthState(auth);

    const signOutPage = () => {
        signOut(auth);
    };
    return (
        <>

            <Navbar sticky='top' collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand as={Link} to="/"><img src={logo} alt="" /></Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="ms-auto">
                            <Nav.Link className='menu' as={Link} to="/">Home</Nav.Link>

                        </Nav>
                        <Nav>
                            <Nav.Link className='menu' as={Link} to="/blog">Blog</Nav.Link>
                            {
                                user ? (
                                    <button onClick={signOutPage} className="btn button mx-4 text-white">
                                        Sign Out
                                    </button>
                                ) : (

                                    <Nav.Link className='menu' as={Link} to="/login">
                                        Login
                                    </Nav.Link>

                                )}
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;