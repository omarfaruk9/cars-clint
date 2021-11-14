import React, { useEffect, useRef, useState } from 'react';
import { Container, Spinner } from 'react-bootstrap';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import swal from 'sweetalert';
import useAuth from '../../hooks/useAuth';
import NavMenu from '../Shared/NavMenu/NavMenu';

const BuyNow = () => {
    const { serviceId } = useParams();
    // console.log(serviceId);
    const { user, isLoding } = useAuth();
    // console.log(user);
    const [service, setService] = useState({});

    const nameRef = useRef();
    const emailRef = useRef();
    const carNameRef = useRef();
    const priceRef = useRef();
    const addressRef = useRef();

    const handleUserInfo = (e) => {
        const name = nameRef.current.value;
        const email = emailRef.current.value;
        const carName = carNameRef.current.value;
        const price = priceRef.current.value;
        const address = addressRef.current.value;
        const status = false;
        const newUser = { name: name, email: email, carName: carName, price: price, address: address, status: status };
        console.log(newUser);

        fetch(`https://frozen-anchorage-07301.herokuapp.com/oders`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newUser)
        })
            .then(res => res.json())
            .then(data => {
                // console.log(data);
            })
        swal("Good job!", "You clicked the button!", "success");
        nameRef.current.value = '';
        carNameRef.current.value = '';
        priceRef.current.value = '';
        addressRef.current.value = '';
        e.preventDefault();
    }

    useEffect(() => {
        fetch(`https://frozen-anchorage-07301.herokuapp.com/services/${serviceId}`)
            .then(res => res.json())
            .then(data => setService(data))
    }, [])
    return (
        <>
            <NavMenu></NavMenu>
            <Container className="service-titele">
                <div className="row row-cols-lg-2 row-cols-sm-1 g-4">
                    <div className="">
                        <img src={service.img} className="img-fluid w-75 rounded-3" alt="" />
                        <div>
                            <h3>Name: {service.name}</h3>
                            <h5>Price: {service.price} $</h5>
                            <p>{service.info}</p>
                            <Link to="/">
                                <button className="btn btn-success">Back to Home</button>
                            </Link>
                        </div>
                    </div>

                    <div className="user-info">
                        <h1 className="text-center my-4">Please Give Some Information</h1>

                        {!isLoding && <form form onSubmit={handleUserInfo}>
                            <input type="text"
                                ref={nameRef}
                                value={user.displayName}
                                disabled
                                className="my-3 px-5 rounded-2 d-block mx-auto"
                            />
                            <input type="text"
                                ref={emailRef}
                                value={user.email}
                                disabled
                                className="my-3 px-5 rounded-2 d-block mx-auto"
                            />

                            <input type="text"
                                ref={carNameRef}
                                disabled
                                value={service.name}
                                className="my-3 px-5 rounded-2 d-block m-auto"
                            />
                            <input type="number"
                                ref={priceRef}
                                disabled
                                value={service.price}
                                className="my-3 px-5 rounded-2 d-block m-auto"
                            />

                            <input type="text"
                                ref={addressRef}
                                className="my-3 px-5 rounded-2 d-block m-auto"
                                placeholder="Your Address"
                            />

                            <input type="submit" value="Oder Place" className="btn d-block btn-outline-dark  mx-auto" />

                        </form>}
                        {isLoding && <Spinner animation="grow" variant="primary" />}
                    </div>
                </div>
            </Container>
        </>
    );
};

export default BuyNow;