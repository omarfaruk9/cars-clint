import React from 'react';
import './DashBoard.css'
import { Link, Switch, Route, useRouteMatch } from 'react-router-dom';
import Admin from '../Admin/Admin';
import MyOders from '../MyOders/MyOders';
import Review from '../Review/Review';
import AddService from '../AddService/AddService';
import AllOders from '../AllOders/AllOders';
import MangeAllService from '../MangeAllService/MangeAllService';
import useAuth from '../../../hooks/useAuth';


const DashBoard = () => {
    const { isAdmin, logOut } = useAuth();
    console.log(isAdmin);
    let { path, url } = useRouteMatch();
    return (
        <>
            <div className="row  mx-0 g-4">

                <div className="col-lg-3 dashbord">
                    <h3 className="text-success mb-5">Dash Board</h3>
                    <div>
                        {/* for both  */}

                        <div>
                            <li className="list-unstyled mx-0 my-2">
                                <Link to="/" className="text-decoration-none text-light fs-6 fw-bold">Home</Link>
                            </li>
                        </div>





                        {
                            isAdmin?.result ? <div className="admin">
                                <li className="list-unstyled mx-0 my-2">
                                    <Link to={`${url}/manageallOder`} className="text-decoration-none text-light fs-6 fw-bold">Manage All Oder</Link>
                                </li>
                                <li className="list-unstyled mx-0 my-2">
                                    <Link to={`${url}//addservice`} className="text-decoration-none text-light fs-6 fw-bold">Add New Service</Link>
                                </li>
                                <li className="list-unstyled mx-0 my-2">
                                    <Link to={`${url}/manageAllServices`} className="text-decoration-none text-light fs-6 fw-bold">Manage All Services</Link>
                                </li>
                                <li className="list-unstyled mx-0 my-2">
                                    <Link to={`${url}/makeadmin`} className="text-decoration-none text-light fs-6 fw-bold">Make Addmin</Link>
                                </li>

                                <button onClick={logOut} className="btn btn-success">Log Out</button>

                            </div> : <div className="for-client">
                                <li className="list-unstyled mx-0 my-2">
                                    <Link to={`${url}/myoder`} className="text-decoration-none text-light fs-6 fw-bold">My Oders</Link>
                                </li>
                                <li className="list-unstyled mx-0 my-2">
                                    <Link to={`${url}/review`} className="text-decoration-none text-light fs-6 fw-bold">Review</Link>
                                </li>
                            </div>
                        }

                        {/* for addmin */}





                    </div>

                </div>

                <div className="col-lg-9">

                    {/* For Client */}

                    <Switch>
                        <Route exact path={`${path}/myoder`}>
                            <MyOders></MyOders>
                        </Route>
                        <Route exact path={`${path}/review`}>
                            <Review></Review>
                        </Route>
                    </Switch>



                    {/* For Admin  */}

                    <Switch>
                        <Route exact path={`${path}/addservice`}>
                            <AddService></AddService>
                        </Route>
                        <Route exact path={`${path}/manageallOder`}>
                            <AllOders></AllOders>
                        </Route>
                        <Route exact path={`${path}/manageAllServices`}>
                            <MangeAllService></MangeAllService>
                        </Route>
                        <Route exact path={`${path}/makeadmin`}>
                            <Admin></Admin>
                        </Route>
                    </Switch>


                </div>

            </div>
        </>
    );
};

export default DashBoard;