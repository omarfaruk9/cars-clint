import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';


const NavMenu = () => {
    const { user, logOut } = useAuth();
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ms-auto">

                        <Link to="/home" className="text-decoration-none mx-2 fw-bold">
                            Home
                        </Link>
                        <Link to="/allservice" className="text-decoration-none mx-2 fw-bold">
                            All Services
                        </Link>
                        <Link to="/dashboard" className="text-decoration-none mx-2 fw-bold">
                            Dashboar
                        </Link>

                    </Nav>
                    <Nav>
                        {user?.email ?

                            <button onClick={logOut} className="btn btn-outline-light">Log Out</button>
                            :
                            <Link to="/login">
                                <button className="btn btn-outline-light">Log In</button>
                            </Link>
                        }
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default NavMenu;