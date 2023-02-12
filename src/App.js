import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import React, { useState } from 'react';
import Alert from './components/Alert';
import{ BrowserRouter,
   Routes,
   Route,
   Link }
   from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message,type) => {
    setAlert({
      msg:message,
      type:type
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500)
  };

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark Mode Has Been Enabled","success");
      document.title = 'TextUtils - Dark Mode';
      // setInterval(() => {
      //   document.title = 'TextUtils - Amazing';
      // }, 1000);
    
    } else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light Mode Has Been Enabled","success");
      document.title = 'TextUtils - Light Mode';
    }
  };

  return (
    < >
    <BrowserRouter>
      <Navbar title='TextUtils' mode={mode} toggleMode={toggleMode}/>
      <Alert alert={alert}/>
      <div className="container">
          <Routes>
            <Route exact path="/home" element={<TextForm heading="Enter text to analyze"  mode={mode} showAlert={showAlert} />}/>
            <Route exact path="/about" element={<About />}/>
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
