import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { UserConsumer } from '../context/auth-context';

const Header = ({ isLoggedIn, isAdmin }) => {

    return (
        <header>
            <Navbar bg="light">
                <div className="container">
                    <Navbar.Brand href="/">Stringify</Navbar.Brand>
                    <Nav className="mr-auto">
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="/all">Shop</Nav.Link>
                        {
                            isLoggedIn && <Nav.Link href="/cart">Cart</Nav.Link>
                        }
                        {
                            isAdmin && <Nav.Link href="/create">Add guitar</Nav.Link>
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
                ({ isLoggedIn, isAdmin }) => (
                    <Header {...props} isAdmin={isAdmin} isLoggedIn={isLoggedIn} />
                )
            }
        </UserConsumer>
    )
}

export default HeaderContext;
