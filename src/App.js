
import './App.css';
import Navbar from './component/Navbar';
import Textform from './component/Textform';
import About from './component/About';
import React, { useState } from 'react';
import Alert from './component/Alert';


import {
  BrowserRouter as Router,
  Switch,
  Route,

  Link

} from "react-router-dom";



function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 3000);

  }

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark mode is enabled", "success");
      // document.title = "TextUtilies - Dark mode";
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode is enabled", "success");
      // document.title = "TextUtilies - light mode";
    }
  }

  return (
    <>
      <Router>
        <Navbar title="Textutiles" aboutText="About Us" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />

      
        <div className="container">
          <Switch>
            <Route exact path="/about">
              <About mode={mode} />
            </Route>
            <Route exact path="/">
              <Textform heading="Try Textutils - Word Counter, Character Counter, Remove extra spaces" mode={mode} showAlert={showAlert} />
            </Route>
          </Switch>
        </div>
      </Router>
    </>
  );


}

export default App;

