import React, { Component } from "react";
import { Form, Button, Alert } from "react-bootstrap";
import { Redirect } from "react-router-dom";
import RegisterService from "../services/register-service";

class Register extends Component {
    static service = new RegisterService();

    state = {
        username: '',
        password: '',
        email: '',
        error: ''
    }

    handleChange = ({ target }) => {
        this.setState({
            [target.name]: target.value,
        })
    };

    handleSubmit = async (event) => {
        event.preventDefault();

        const { username, email, password } = this.state;

        const credentials = {
            username,
            email,
            password
        }

        this.setState({
            error: ''
        }, async () => {
            try {

                const result = await Register.service.register(credentials);

                if (!result.success) {
                    const errors = Object.values(result.errors).join(' ');

                    throw new Error(errors);
                }

                return result;

            } catch (error) {
                this.setState({
                    error: error.message,
                })
            }
        })
    }

    render() {
        const { username, email, password, error } = this.state;

        const { isLoggedIn } = this.props;


        if (isLoggedIn) {
            return (
                <Redirect to="/" />
            )
        }

        return (
            < div className="container mt-3 wrapper" >
                <h1 className="display-1 mb-5">Register here</h1>
                {
                    error.length
                        ?
                        <Alert dismissible className="alert" variant="danger">
                            {error}
                        </Alert>
                        : null
                }
                <Form onSubmit={this.handleSubmit} id="bdr" className="form">
                    <Form.Group>
                        <Form.Label>Username</Form.Label>
                        <Form.Control
                            id="username"
                            name="username"
                            placeholder="Enter username"
                            type="text"
                            value={username}
                            onChange={this.handleChange}
                        />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Email address</Form.Label>
                        <Form.Control
                            id="email"
                            name="email"
                            type="email"
                            placeholder="Enter email"
                            value={email}
                            onChange={this.handleChange}
                        />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                            id="password"
                            name="password"
                            type="password"
                            placeholder="Enter password"
                            value={password}
                            onChange={this.handleChange}
                        />
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