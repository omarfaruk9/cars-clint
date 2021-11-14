import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';

const MangeAllService = () => {
    const [allServices, setAllServices] = useState([]);
    useEffect(() => {
        fetch(`https://frozen-anchorage-07301.herokuapp.com/services`)
            .then(res => res.json())
            .then(data => setAllServices(data));
    }, [allServices]);

    const handleDelete = (id) => {
        alert(id)
        fetch(`https://frozen-anchorage-07301.herokuapp.com/services/${id}`, {
            method: 'DELETE'
        })
    }
    return (
        <div>
            <h1 className="text-center my-5 fw-bold text-success">Manage All Services {allServices.length}</h1>
            <Table responsive striped bordered hover variant="dark">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Service Id</th>
                        <th>Car Name</th>
                        <th>Delete Service</th>

                    </tr>
                </thead>
                <tbody>
                    {
                        allServices.map((allService, index) => <tr>
                            <td>{index + 1}</td>
                            <td>{allService._id}</td>
                            <td>{allService.name}</td>
                            <td> <button onClick={() => handleDelete(allService._id)} className="btn btn-warning">Delete</button></td>
                        </tr>)
                    }
                </tbody>
            </Table>
        </div>
    );
};

export default MangeAllService;