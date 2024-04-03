import './assets/App.css';
import React from 'react';
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import HomePage from './pages/HomePage';
import './assets/fonts.css'


function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<HomePage />} />
      </Routes>
      <ToastContainer />
    </Router>
  );
}

export default App;