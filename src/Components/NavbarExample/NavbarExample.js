import React, { useState } from 'react';
import Logo from '../../images/logo.png';
import { Navbar, Nav, Container, Button } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon } from '@fortawesome/free-solid-svg-icons';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import './NavbarExample.css';    

const NavbarExample = () => {
    const [expanded, setExpanded] = useState(false); 
    return (
        <Navbar expand="lg" className="bg-body-light nav-style" expanded={expanded}>
          <Container fluid>
            <Navbar.Brand as={Link} to="/" style={{fontSize:'30px'}}>
                <img src={Logo} alt="Online Study" style={{ width: '50px', marginRight: '10px',}} />
                Online Study
            </Navbar.Brand>

            <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={() => setExpanded(!expanded)} className="bg-gradient">
                {expanded ? (
                    <FontAwesomeIcon icon={faTimes} className="fa icon-close" />
                ) : (
                    <FontAwesomeIcon icon={faBars} className="fa icon-expand" />
                )}
            </Navbar.Toggle>

            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ms-auto text-body" style={{fontSize:'15px',marginRight:'20px'}}>
                    <Nav.Link as={NavLink} to="/" exact onClick={() => setExpanded(false)}>Home</Nav.Link>
                    <Nav.Link as={NavLink} to="/about" onClick={() => setExpanded(false)}>About</Nav.Link>
                    <Nav.Link as={NavLink} to="/courses" onClick={() => setExpanded(false)}>Courses</Nav.Link>
                    <Nav.Link as={NavLink} to="/contact" onClick={() => setExpanded(false)}>Contact Us</Nav.Link> 
                </Nav>
                <Button className="button-style">Search</Button>
                <FontAwesomeIcon icon={faMoon} className="ms-3"/>
            </Navbar.Collapse>
        </Container>
    </Navbar>
    );
};

export default NavbarExample;
