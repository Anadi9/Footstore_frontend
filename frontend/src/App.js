import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Signup from './user/Signup';
import Signin from './user/Signin';
import Home from './components/Home';
import NavBar from './components/NavBar';
import PrivateRoute from './auth/PrivateRoute';
import UserDashboard from './user/UserDashboard';

const App = () => {
  return (
      <BrowserRouter>
        <NavBar/>
          <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/signin" exact component={Signin} />
          <Route path="/signup" exact component={Signup} />
          <PrivateRoute path="/user/dashboard" component={UserDashboard}/>
          </Switch>
      </BrowserRouter>
  );
};

export default App;