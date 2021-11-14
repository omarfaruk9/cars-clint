import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import swal from 'sweetalert';

const AllOders = () => {

    const [allOders, setAllOders] = useState([]);
    useEffect(() => {
        fetch(`https://frozen-anchorage-07301.herokuapp.com/alloders`)
            .then(res => res.json())
            .then(data => setAllOders(data))
    }, [allOders]);

    const handleUpadate = (id) => {
        fetch(`https://frozen-anchorage-07301.herokuapp.com/alloders/${id}`, {
            method: 'PUT'
        })
            .then()
    }

    const handleDelterOders = (id) => {
        const isDelete = window.confirm('are you sure delete');
        if (isDelete) {
            fetch(`https://frozen-anchorage-07301.herokuapp.com/delteoders/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json)
                .then(data => {
                    console.log(data);
                })
        }
    }
    return (
        <div className="">
            <h1 className="text-center my-5 fw-bold text-success">Manage All Oders {allOders.length}</h1>

            <Table responsive striped bordered hover variant="dark">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>User Name</th>
                        <th>Car Name</th>
                        <th>Status</th>
                        <th>Action</th>

                    </tr>
                </thead>
                <tbody>
                    {
                        allOders.map((allOder, index) => <tr>
                            <td>{index + 1}</td>
                            <td>{allOder.name}</td>
                            <td>{allOder.carName}</td>

                            <td>
                                {
                                    allOder.status === false ? 'Pending' :
                                        'Shiped'
                                }
                            </td>

                            <td> <button onClick={() => handleDelterOders(allOder._id)} className="btn btn-warning">Delete</button>

                                <button onClick={() => handleUpadate(allOder._id)} className="btn btn-success mx-2">Approved</button>
                            </td>
                        </tr>)
                    }
                </tbody>
            </Table>

        </div>
    );
};

export default AllOders;