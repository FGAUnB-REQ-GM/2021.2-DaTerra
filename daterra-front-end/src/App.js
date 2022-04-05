import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter as Router,Routes,Route} from "react-router-dom";

import Login from "./components/Login/login.component";
import SignUp from "./components/signup.component";
import UserChoice from "./components/userchoice.component";
import FarmRegister from "./components/farmregister.component";

function App() {
  return (
    <Router>
      <div className="App">
        <div className="outer">
            <Routes>
              <Route exact={true} path='/' element={<Login/>} />
              <Route path="/signin" element={<Login/>} />
              <Route path="/choice" element={<UserChoice/>} />
              <Route path="/signup" element={<SignUp/>} />
              <Route path="/signup/farm" element={<FarmRegister/>} />
            </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;