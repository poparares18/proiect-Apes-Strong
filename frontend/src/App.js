import React, { useState } from 'react';
import { UserContext } from './context';
import logo from './logo.svg';
import './App.css';
import SignUp from './components/pages/SignUp';
import Materii from './components/pages/Materii';
import LogIn from './components/pages/LogIn';
import Notite from './components/pages/Notite';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import EditareNotita from './components/pages/EditareNotita';

function App() {
  const [user, setUser] = useState(null);
  return (
    <UserContext.Provider value={{ user, setUser }}>
      <Router>
        <Switch>
          <Route exact path="/">
            <LogIn />
          </Route>
          <Route exact path="/materii">
            <Materii />
          </Route>
          <Route exact path="/sign-up">
            <SignUp />
          </Route>
          <Route exact path="/log-in">
            <LogIn />
          </Route>
          <Route exact path="/editare-notita/:id:continut">
            <EditareNotita />
          </Route>
          <Route path="/:id" children={<Notite />} />
          {/* <Route path="/editare-notita" children={<EditareNotita />} /> */} 
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
