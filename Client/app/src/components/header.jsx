import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { UserConsumer } from '../context/auth-context';

const Header = ({ isLoggedIn }) => {
    return (
        <header>
            <Navbar bg="light">
                <div class="container">
                    <Navbar.Brand href="/">Stringify</Navbar.Brand>
                    <Nav className="mr-auto">
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="/shop">Shop</Nav.Link>
                        <Nav.Link href="/cart">Cart</Nav.Link>
                    </Nav>
                    {
                        isLoggedIn
                            ?
                            <Nav className="justify-content-end">
                                <Nav.Link href="/logout">Logout</Nav.Link>
                            </Nav>
                            :
                            <Nav className="justify-content-end">
                                <Nav.Link href="/login">Login</Nav.Link>
                                <Nav.Link href="/register">Register</Nav.Link>
                            </Nav>
                    }
                </div>
            </Navbar>
        </header>
    )
}

const HeaderContext = (props) => {
    return (
        <UserConsumer>
            {
                ({ isLoggedIn }) => (
                    <Header {...props} isLoggedIn={isLoggedIn} />
                )
            }
        </UserConsumer>
    )
}

export default HeaderContext;
