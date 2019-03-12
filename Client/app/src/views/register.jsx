import React, { Component } from "react";
import { Form, Button } from "react-bootstrap";

class Register extends Component {
    render() {
        return (
            < div class="container mt-5 wrapper" >
                <Form id="bdr" class="form">
                    <Form.Group id="username">
                        <Form.Label>Username</Form.Label>
                        <Form.Control name="username"
                            placeholder="Enter username" />
                    </Form.Group>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control name="email"
                            type="email" placeholder="Enter email" />
                    </Form.Group>
                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control name="password"
                            type="password" placeholder="Enter password" />
                    </Form.Group>
                    <Button variant="outline-secondary" type="submit">
                        Register
                    </Button>
                </Form>
            </div >
        )
    }
}

export default Register;