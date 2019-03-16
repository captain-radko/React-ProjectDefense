import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { UserConsumer } from '../context/auth-context';
import Auth from "../utils/auth";

const Header = ({ isLoggedIn }) => {
    const isAdmin = Auth.isUserAdmin;

    return (
        <header>
            <Navbar bg="light">
                <div className="container">
                    <Navbar.Brand href="/">Stringify</Navbar.Brand>
                    <Nav className="mr-auto">
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="/all">Shop</Nav.Link>
                        <Nav.Link href="/cart">Cart</Nav.Link>
                        {
                            isLoggedIn && isAdmin
                                ? <Nav.Link href="/create">Add guitar</Nav.Link>
                                : null
                        }
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
