import React from 'react';
import { Route, Redirect } from "react-router-dom";
import { UserConsumer } from '../context/auth-context';

const AdminRoute = ({ isLoggedIn, allowedRoles = [], roles, ...otherProps }) => {
    const isAllowed =  (!allowedRoles.length) || (roles.map(role => role.toLowerCase()).some(role => allowedRoles.includes(role)));

    if (!isLoggedIn || !isAllowed) {
        return <Redirect to="/not-found" />
    }

    return <Route {...otherProps} />
}

const AuthRouteContext = (props) => {
    return (
        <UserConsumer>
            {
                ({ isLoggedIn, roles }) => (
                    <AdminRoute {...props} roles={roles} isLoggedIn={isLoggedIn} />
                )
            }
        </UserConsumer>
    )
}

export default AuthRouteContext;