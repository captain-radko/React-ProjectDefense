import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';

const Header = () => {
    return (
        <header>
            <Navbar bg="light">
                <div class="container">
                    <Navbar.Brand href="/">Stringify</Navbar.Brand>
                    <Nav className="mr-auto">
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="/guitars/electric">Electric</Nav.Link>
                        <Nav.Link href="/guitars/acoustic">Acoustic</Nav.Link>
                    </Nav>
                    <Nav className="justify-content-end">
                        <Nav.Link href="/login">Login</Nav.Link>
                        <Nav.Link href="/signup">Register</Nav.Link>
                    </Nav>
                </div>
            </Navbar>
        </header>
    )
}

export default Header;
