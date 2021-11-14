import React, { useState } from 'react';
import { Spinner } from 'react-bootstrap';
import { Link, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import bg from '../../images/admin-login.jpg';
import swal from 'sweetalert';

const Login = () => {
    const [loginData, setLoginData] = useState({});
    const { isLoding, loginUser } = useAuth();
    const location = useLocation();
    const history = useHistory();

    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newUser = { ...loginData };
        newUser[field] = value;
        setLoginData(newUser);
        console.log(newUser);
    }

    const handleLogIn = (e) => {
        loginUser(loginData?.email, loginData?.password, location, history);
        swal("Good job!", "You clicked the button!", "success");
        e.preventDefault();
    }
    return (
        <div className="text-center my-5 container">
            <div className="row row-cols-lg-2 row-cols-md-1 row-cols-sm-1 g-4">
                <div className="register mt-5">
                    <h1 className="mb-5">Please Login</h1>

                    {!isLoding && <form form onSubmit={handleLogIn}>
                        <input type="email"
                            name="email"
                            className="my-3 w-75 form-control d-block mx-auto"
                            placeholder="Email"
                            onBlur={handleOnBlur}
                        />

                        <input type="password"
                            name="password"
                            className="my-3 w-75 d-block form-control m-auto"
                            placeholder="Your Password"
                            onBlur={handleOnBlur}
                        />

                        <input type="submit" value="Login" className="btn w-75 d-block btn-outline-dark form-control mx-auto" />
                        <h1 className="my-3 text-danger"> -----------------------------</h1>
                        <p>
                            <Link to="/register">
                                <h3>Allready Register?</h3>
                            </Link>
                        </p>
                    </form>}

                    {isLoding && <Spinner animation="border" variant="success" />}

                </div>
                <div className="bg">
                    <img src={bg} alt="" />
                </div>
            </div>
        </div >
    );
};

export default Login;