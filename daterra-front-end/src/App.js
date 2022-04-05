import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter as Router} from "react-router-dom";

import Login from "./components/login.component";
//import SignUp from "./components/signup.component";

function App() {
  return (<Router>
    <div className="App">
      <div className="outer">
        <div className="inner">
            <Login/>
        </div>
      </div>
    </div></Router>
  );
}

export default App;