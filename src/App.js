import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import AuthProvider from './context/AuthProvider/AuthProvider';
import AllServices from './pages/AllServices/AllServices';
import BuyNow from './pages/BuyNow/BuyNow';
import AddService from './pages/DashBoard/AddService/AddService';
import DashBoard from './pages/DashBoard/DashBoard/DashBoard';
import Home from './pages/Home/Home/Home';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import Footer from './pages/Shared/Footer/Footer';
import PrivateRoute from './PrivateRoute/PrivateRoute';
// import NavMenu from './pages/Shared/NavMenu/NavMenu';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          {/* <NavMenu /> */}
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route path="/allservice">
              <AllServices></AllServices>
            </Route>
            <PrivateRoute path="/buynow/:serviceId">
              <BuyNow></BuyNow>
            </PrivateRoute>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="/register">
              <Register></Register>
            </Route>
            <PrivateRoute path="/dashboard">
              <DashBoard></DashBoard>
            </PrivateRoute>
          </Switch>
          <Footer></Footer>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
