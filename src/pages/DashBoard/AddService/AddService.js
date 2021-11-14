import React, { useRef, useState } from 'react';
import { Container } from 'react-bootstrap';
import swal from 'sweetalert';

const AddService = () => {
    const nameRef = useRef();
    const infoRef = useRef();
    const priceRef = useRef();
    const imgRef = useRef();

    const handleAddService = (e) => {

        const name = nameRef.current.value;
        const info = infoRef.current.value;
        const price = priceRef.current.value;
        const img = imgRef.current.value;
        const newService = { name: name, info: info, price: price, img: img };
        // console.log(newService);

        fetch(`https://frozen-anchorage-07301.herokuapp.com/service`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newService)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
            })
        swal("Good job!", "You clicked the button!", "success");
        nameRef.current.value = '';
        infoRef.current.value = '';
        priceRef.current.value = '';
        imgRef.current.value = '';
        e.preventDefault();
    }
    return (
        <Container>
            <div className="row row-cols-lg-1">
                <h1 className="text-center text-success my-5">Add Service</h1>

                <form form onSubmit={handleAddService}>
                    <input type="text"
                        ref={nameRef}
                        className="my-3 px-5 rounded-2 d-block mx-auto"
                        placeholder="Service name"

                    />

                    <input type="text"
                        ref={infoRef}
                        className="my-3 px-5 rounded-2 d-block m-auto"
                        placeholder="Description"

                    />
                    <input type="number"
                        ref={priceRef}
                        className="my-3 px-5 rounded-2 d-block m-auto"
                        placeholder="Price"

                    />
                    <input type="text"
                        ref={imgRef}
                        className="my-3 px-5 rounded-2 d-block m-auto"
                        placeholder="Photo url"

                    />


                    <input type="submit" value="Add Service" className="btn d-block btn-outline-dark  mx-auto" />

                </form>
            </div>
        </Container>
    );
};

export default AddService;