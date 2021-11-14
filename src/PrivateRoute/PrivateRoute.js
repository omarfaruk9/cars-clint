import React from 'react';
import { Spinner } from 'react-bootstrap';
import { Redirect, Route } from 'react-router';
import useAuth from '../hooks/useAuth';

const PrivateRoute = ({ children, ...rest }) => {
    const { user, isLoding } = useAuth();
    if (isLoding) {
        return <Spinner animation="border" variant="success" />
    }
    return (
        <Route
            {...rest}
            render={({ location }) => user?.email ? (children) : (<Redirect

                to={{
                    pathname: "/login",
                    state: { from: location }
                }}
            />
            )
            }
        />
    );
};

export default PrivateRoute;