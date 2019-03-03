import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';

const Header = () => {
    return (
        <header>
            <Navbar bg="primary" variant="dark">
                <Navbar.Brand href="/">Stringify</Navbar.Brand>
                <Nav className="mr-auto">
                    <Nav.Link href="/">Home</Nav.Link>
                    <Nav.Link href="/shop">Shop</Nav.Link>
                    <Nav.Link href="/about">About</Nav.Link>
                </Nav>
            </Navbar>
        </header>
    )
}

export default Header;
