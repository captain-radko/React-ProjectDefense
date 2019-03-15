import React, { Component } from "react";
import { Form, Button, Alert } from "react-bootstrap";
import { Redirect } from "react-router-dom";
import RegisterService from "../services/register-service";
import AuthenticationService from "../services/auth-service";
import { UserConsumer } from "../context/auth-context";

class Register extends Component {
    static service = new RegisterService();
    static loginService = new AuthenticationService();

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
        const { updateUser } = this.props;

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
                const loginResult = await Register.loginService.login(credentials);

                if (!result.success) {
                    const errors = Object.values(result.errors).join(' ');

                    throw new Error(errors);
                }

                window.localStorage.setItem('auth_token', loginResult.token);
                window.localStorage.setItem('user', JSON.stringify({
                    ...loginResult.user,
                    isLoggedIn: true
                }));

                updateUser({
                    isLoggedIn: true,
                    updateUser,
                    ...loginResult.user
                });

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

const RegisterContext = (props) => {
    return (
        <UserConsumer>
            {
                ({ isLoggedIn, updateUser }) => (
                    <Register
                        {...props}
                        isLoggedIn={isLoggedIn}
                        updateUser={updateUser}
                    />
                )
            }
        </UserConsumer>
    )
}

export default RegisterContext;