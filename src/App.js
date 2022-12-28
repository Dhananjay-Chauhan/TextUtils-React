import './App.css';
import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
// import About from './Components/About';
import Alert from './Components/Alert';



function App() {
  const [mode, setMode] = useState('light');
  const [txt, setTxt] = useState('Enable Dark Mode')
  const [txtR, setTxtR] = useState('Enable Red Mode')
  const toogleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      setTxt('Enable Light Mode');
      document.body.style.backgroundColor = '#2d3131e3';
      document.body.style.color = 'white';
      showAlert("Dark Mode is Enabled.", "success")
      document.title = "TextUtils-Dark Mode";
      // setInterval(() => {
      //   document.title="hello use this";

      // }, 1500);
      // setInterval(() => {
      //   document.title="it is good";

      // }, 2000);
    }
    else {
      setMode('light');
      setTxt('Enable Dark Mode');
      document.body.style.backgroundColor = 'white';
      document.body.style.color = 'black';
      showAlert("Light Mode is Enabled.", "success")
      document.title = "TextUtils-Light Mode";
    }
  };
  // red toogleMode 
  const toogleModeR = () => {
    if (mode === 'light' || mode === 'dark') {
      setMode('red');
      setTxtR('Enable Light Mode');
      document.body.style.backgroundColor = '#cc3e3e';
      document.body.style.color = 'white';
      showAlert("Red Mode is Enabled.", "success")
    }
    else {
      setMode('light');
      setTxtR('Enable Red Mode');
      document.body.style.backgroundColor = 'white';
      document.body.style.color = 'black';
      showAlert("Light Mode is Enabled.", "success")
    }
  };
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  };
  return (
    <>
      <Navbar title="TextUtils"  mode={mode} toogleMode={toogleMode} txt={txt} toogleModeR={toogleModeR} txtR={txtR} />
      <Alert alert={alert} />
      <div className="container">
          <TextForm heading="Write your text Here" mode={mode} showAlert={showAlert} />
      </div>
     
    </>
  );
};

export default App;
