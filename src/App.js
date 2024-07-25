import React, { useState } from "react";
import './App.css';
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About'; // Corrected import
import NoteState from './context/notes/NoteState';
import Alert from './components/Alert';
import { LogIn } from './components/LogIn'; // Changed to default import
import { SignUp } from './components/SignUp'; // Changed to default import

function App() {
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      message: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 3000);
  };

  return (
    <>
      <NoteState>
        <Router>
          <Navbar />
          <AlertWrapper alert={alert} />
          <Routes>
            <Route path="/about" element={<About />} />
            <Route
              path="*"
              element={
                <div className="container">
                  <Routes>
                    <Route exact path="/" element={<Home showAlert={showAlert} />} />
                    <Route exact path="/login" element={<LogIn showAlert={showAlert} />} />
                    <Route exact path="/signup" element={<SignUp showAlert={showAlert} />} />
                  </Routes>
                </div>
              }
            />
          </Routes>
        </Router>
      </NoteState>
    </>
  );
}

function AlertWrapper({ alert }) {
  const location = useLocation();
  // Only show Alert if the current path is not '/about'
  return location.pathname !== '/about' ? <Alert alert={alert} /> : null;
}

export default App;