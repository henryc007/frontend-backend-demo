import './assets/App.css';
import React, {lazy, Suspense} from 'react';
import {Link, BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import musicNotes from './assets/musicNotes.png';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const HomePage = lazy(() => import('./pages/HomePage'));
const Results = lazy(() => import('./pages/Results'));
const Form = lazy(() => import('./components/Form'));


function App() {
  return (
    <Router>
    <>
      <header >
      <Link to="/" style={{ textDecoration: 'none' }}>
        <h1 id='app-header'>The Groove <img id="header-image" src={musicNotes} alt="music notes"/></h1>
      </Link>
      </header>
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route exact path="/" element={<HomePage />} />
            <Route exact path="/Results" element={<Results />} />
            <Route exact path="/Form" element={<Form />} />
          </Routes>
        </Suspense>
      <ToastContainer />
    </>
    </Router>
  );
}

export default App;