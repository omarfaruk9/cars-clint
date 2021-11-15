import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import swal from 'sweetalert';

const Admin = () => {
    const [email, setEmail] = useState('');
    // console.log(email);

    const handleOnBlur = (e) => {
        setEmail(e.target.value);
        // console.log(email);
    }

    const handleMakeAdmin = e => {
        e.preventDefault();
        fetch(`https://frozen-anchorage-07301.herokuapp.com/makeadmin/${email}`, {
            method: "PUT",
            headers: {
                "content-type": "application/json"
            }
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
            })
        alert('addmin maked now')

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