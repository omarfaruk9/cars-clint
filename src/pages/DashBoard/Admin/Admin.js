import React, { useState } from 'react';
import { Container } from 'react-bootstrap';

const Admin = () => {
    const [email, setEmail] = useState('');

    const handleOnBlur = (e) => {
        setEmail(e.target.value);
        console.log(email);
    }

    const handleMakeAdmin = e => {

        e.preventDefault();
    }
    return (
        <Container>
            <div className="text-center">
                <h1 className="text-center my-5 fw-bold text-success">Make Admin</h1>
                <form onSubmit={handleMakeAdmin}>
                    <input type="email"
                        name="email"
                        className="my-3 w-75 form-control d-block mx-auto"
                        placeholder="Email"
                        onBlur={handleOnBlur}
                    />

                    <button type="submit" className="btn btn-lg btn-success">Make Admin</button>
                </form>
            </div>
        </Container>
    );
};

export default Admin;