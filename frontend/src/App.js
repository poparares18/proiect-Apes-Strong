import React, { useState } from 'react';
import { UserContext } from './context';
import { ContinutContext } from './contextContinut';
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
  const [continut, setContinut] = useState(null);
  return (
    <UserContext.Provider value={{ user, setUser }}>
      <ContinutContext.Provider value={{ continut, setContinut }}>
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
          <Route exact path="/editare-notita/:id">
            <EditareNotita />
          </Route>
          <Route path="/:id" children={<Notite />} />
          {/* <Route path="/editare-notita" children={<EditareNotita />} /> */} 
        </Switch>
      </Router>
      </ContinutContext.Provider>
    </UserContext.Provider>
  );
}

export default App;
