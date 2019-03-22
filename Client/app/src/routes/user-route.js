import React from 'react';
import { Route, Redirect } from "react-router-dom";
import { UserConsumer } from '../context/auth-context';

const UserRoute = ({ isLoggedIn, ...otherProps }) => {
    if (!isLoggedIn) {
        return <Redirect to="/not-found" />
    }

    return <Route {...otherProps} />
}

const UserRouteContext = (props) => {
    return (
        <UserConsumer>
            {
                ({ isLoggedIn }) => (
                    <UserRoute {...props} isLoggedIn={isLoggedIn} />
                )
            }
        </UserConsumer>
    )
}

export default UserRouteContext;