import React, { Component } from "react";
import { Form, Button, Alert } from "react-bootstrap";
import { Redirect } from 'react-router-dom';
import AuthenticationService from '../services/auth-service';
import { UserConsumer } from "../context/auth-context";

class Login extends Component {
    static service = new AuthenticationService();

    state = {
        email: '',
        password: '',
        error: '',
    };
 
    handleChange = ({ target }) => {
        this.setState({
            [target.name]: target.value,
        })
    };

    handleSubmit = async (event) => {
        event.preventDefault();

        const { email, password } = this.state;
        const { updateUser } = this.props;

        const credentials = {
            email,
            password
        }

        this.setState({
            error: '',
        }, async () => {
            try {
                const result = await Login.service.login(credentials);

                if (!result.success) {
                    const errors = Object.values(result.errors).join('\n');

                    throw new Error(errors);
                }

                window.localStorage.setItem('auth_token', result.token);
                window.localStorage.setItem('user', JSON.stringify({
                    ...result.user,
                    isLoggedIn: true
                }));

                updateUser({
                    isLoggedIn: true,
                    updateUser,
                    ...result.user
                });

            } catch (error) {
                this.setState({
                    error: error.message,
                }) 
            }
        })
    };

    render() {
        const { email, password, error } = this.state;
        const { isLoggedIn } = this.props;


        if (isLoggedIn) {
            return (
                <Redirect to="/" />
            )
        }

        return (
            < div class="container mt-3 wrapper" >
                {
                    error.length
                        ?
                        <Alert dismissible class="alert" variant="danger">
                            {error}
                        </Alert>
                        : null
                }
                <h1 class='display-1 mb-5'>Login here</h1>
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

const LoginContext = (props) => {
    return (
        <UserConsumer>
            {
                ({ isLoggedIn, updateUser }) => (
                    <Login
                        {...props}
                        isLoggedIn={isLoggedIn}
                        updateUser={updateUser}
                    />
                )
            }
        </UserConsumer>
    )
}

export default LoginContext;