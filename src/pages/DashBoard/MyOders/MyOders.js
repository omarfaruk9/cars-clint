import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import useAuth from '../../../hooks/useAuth';
import swal from 'sweetalert';

const MyOders = () => {
    const { user } = useAuth();
    const [myOders, setMyOders] = useState([]);
    useEffect(() => {
        fetch(`https://frozen-anchorage-07301.herokuapp.com/myOders/${user.email}`)
            .then(res => res.json())
            .then(data => setMyOders(data))
    }, []);

    // delte oders 
    const handleDelete = (id) => {
        fetch(`https://frozen-anchorage-07301.herokuapp.com/admindeleteoders/${id}`, {
            method: 'DELETE'
        })
            .then(res => res.json)
            .then(data => {
                console.log(data);
            })
        swal({
            title: "Are you sure?",
            text: "Once deleted, you will not be able to recover this imaginary file!",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
            .then((willDelete) => {
                if (willDelete) {
                    swal("Poof! Your imaginary file has been deleted!", {
                        icon: "success",
                    });
                } else {
                    swal("Your imaginary file is safe!");
                }
            });
    }



    return (
        <div className="">
            <h1 className="text-center my-5 fw-bold text-success">My Odres {myOders.length}</h1>
            <Table striped bordered hover variant="dark">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>User Name</th>
                        <th>Car Name</th>
                        <th>Status</th>
                        <th>Cancle Oder</th>

                    </tr>
                </thead>
                <tbody>
                    {
                        myOders.map((myOder, index) => <tr>
                            <td>{index + 1}</td>
                            <td>{myOder.name}</td>
                            <td>{myOder.carName}</td>
                            <td>
                                {
                                    myOder.status === false ? 'Pending' :
                                        'Shiped'
                                }
                            </td>
                            <td> <button onClick={() => handleDelete(myOder._id)} className="btn btn-warning">Cancle</button></td>
                        </tr>)
                    }
                </tbody>
            </Table>

        </div>
    );
};

export default MyOders;