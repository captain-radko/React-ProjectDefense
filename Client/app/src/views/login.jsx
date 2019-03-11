import React, { Component } from "react";
import { Form, Button, Alert } from "react-bootstrap";
import { Redirect } from 'react-router-dom';
import AuthenticationService from '../services/auth-service';

class Login extends Component {
    static service = new AuthenticationService();

    state = {
        email: '',
        password: '',
        error: '',
        isLoggedIn: false,
    };

    handleChange = ({ target }) => {
        this.setState({
            [target.name]: target.value,
        })
    };

    handleSubmit = async (event) => {
        event.preventDefault();

        this.setState({
            error: '',
        }, async () => {
            try {
                const credentials = await Login.service.login();

                console.log(credentials);
                

                this.setState({
                    isLoggedIn: true
                });
            } catch (error) {
                this.setState({
                    error: error.message,
                })
            }
        })
    };

    render() {
        const { email, password, isLoggedIn, error } = this.state;

        if (isLoggedIn) {
            return (
                <Redirect to="/" />
            )
        }

        return (
            < div class="container mt-5 wrapper" >
                {
                    error.length
                        ? 
                        <Alert class="alert" variant="danger">
                            {error}
                        </Alert>
                        : null
                }
                <Form onSubmit={this.handleSubmit} id="bdr" class="form">
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control name="email" value={email}
                            onChange={this.handleChange} type="email" placeholder="Enter email" />
                    </Form.Group>
                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control name="password" value={password}
                            onChange={this.handleChange} type="password" placeholder="Password" />
                    </Form.Group>
                    <Button variant="outline-secondary" type="submit">
                        Login
                    </Button>
                </Form>
            </div >
        )
    }
}

export default Login;