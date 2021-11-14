import React, { useState } from 'react';
import { Spinner } from 'react-bootstrap';
import { Link, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import bg from '../../images/admin-login.jpg'
import swal from 'sweetalert';

const Register = () => {
    const [loginData, setLoginData] = useState({});
    const { registerNewUser, isLoding } = useAuth();
    const location = useLocation();
    const history = useHistory();

    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newUser = { ...loginData };
        newUser[field] = value;
        setLoginData(newUser);
        // console.log(newUser);
    }

    const handleRegister = (e) => {
        registerNewUser(loginData?.email, loginData?.password, loginData?.name, location, history);
        swal("Good job!", "Your Registation!", "successfully\n Pleace Login");
        e.preventDefault();
    }
    return (
        <div className="text-center my-5 container">
            <div className="row row-cols-lg-2 row-cols-md-1 row-cols-sm-1 g-4">
                <div className="register mt-5">
                    <h1 className="mb-5">Please Register</h1>

                    {!isLoding && <form onSubmit={handleRegister}>
                        <input type="text"
                            name="name"
                            className="my-3 w-75 form-control d-block mx-auto"
                            placeholder="Your Name"
                            onBlur={handleOnBlur}
                        />

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

                        <input type="submit" value="Register" className="btn w-75 d-block btn-outline-dark form-control mx-auto" />
                        <h1 className="my-3 text-danger"> -----------------------------</h1>
                        <p>
                            <Link to="/login">
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
        </div>
    );
};

export default Register;