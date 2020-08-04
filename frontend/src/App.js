import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Signup from './user/Signup';
import Signin from './user/Signin';
import Home from './components/Home';
import NavBar from './components/NavBar';
import PrivateRoute from './auth/PrivateRoute';
import UserDashboard from './user/UserDashboard';
import AdminRoute from './auth/AdminRoute';
import AdminDashboard from './user/AdminDashboard';
import AddCategory from './admin/AddCategory';
import AddProduct from './admin/AddProduct';
import Shop from './components/Shop';

const App = () => {
  return (
      <BrowserRouter>
        <NavBar/>
          <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/shop" exact component={Shop} />
          <Route path="/signin" component={Signin} />
          <Route path="/signup" component={Signup} />
          <PrivateRoute path="/user/dashboard" component={UserDashboard}/>
          <AdminRoute path="/admin/dashboard" component={AdminDashboard}/>
          <AdminRoute path="/create/category" component={AddCategory}/>
          <AdminRoute path="/create/product" component={AddProduct}/>
          </Switch>
      </BrowserRouter>
  );
};

export default App;