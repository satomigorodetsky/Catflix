import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect, withRouter } from 'react-router-dom';

const Auth = ({ component: Component, path, loggedIn, exact }) => {
    return (
    <Route path={path} exact={exact} render={(props) => (
        !loggedIn ? (
            <Component {...props} />
        ) : (
                <Redirect to="/browse" />
            )
    )} />)
};

const Protected = ({ component: Component, path, loggedIn, exact }) => (
    <Route path={path} exact={exact} render={(props) => (
        loggedIn ? (
            <Component {...props} />
        ) : (
                <Redirect to="/login" />
            )
    )} />
);

const mstp = state => (
    { loggedIn: Boolean(state.session.currentUser) }
);

export const AuthRoute = (connect(mstp)(Auth));

export const ProtectedRoute = (connect(mstp)(Protected));
