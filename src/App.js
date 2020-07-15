import React, { useEffect, useState } from 'react';
import { Switch, Route } from 'react-router-dom';
import Axios from 'axios';
import NavBar from './components/NavBar';
import Home from './components/Home';
import Login from './content/Login';
import Register from './content/Register';
import UserContext from './context/UserContext';


function App() {
  const [userData, setUserData] = useState({
    token: undefined,
    user: undefined,
  });

  useEffect(() => {
    const checkLoggedIn = async () => {
      let token = localStorage.getItem("auth-token");
      if (token === null) {
        localStorage.setItem("auth-token", "");
        token = "";
      }
      const tokenRes = await Axios.post(
        "http://localhost:5000/users/tokenIsValid",
        null,
        { headers: { "x-auth-token": token } }
      );
      if (tokenRes.data) {
        const userRes = await Axios.get("http://localhost:5000/users/", {
          headers: { "x-auth-token": token },
        });
        setUserData({
          token,
          user: userRes.data,
        });
      }
    };

    checkLoggedIn();
  }, []);
  return (
    <div className="App">
    <UserContext.Provider value={{ userData, setUserData }}>
     <NavBar/>
       <Switch>
         <Route exact path='/' component={Home}/>
         <Route path="/login" component={Login} />
         <Route path="/register" component={Register} />
       </Switch>
    </UserContext.Provider>
    </div>
  );
}

export default App;
