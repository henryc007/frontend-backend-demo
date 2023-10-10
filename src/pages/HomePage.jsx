import React from 'react';
import { useState } from 'react';
import Form from '../components/Form';
import ReactModal from 'react-modal';
import "../assets/HomePage.css"


const HomePage = () => {
    const [showForm, setShowForm] = useState(false);
    // const [showNotes, setShowNotes] =useState(false);
  
    const handleButtonClick = () => {
        setShowForm(true);
    };

    const renderNotes1 = () => {
      if (!showForm) {
        return (
          <div className="muzieknootjes">
            <div id="noot-1">&#9835; &#9833;</div>
            <div id="noot-2">&#9833;</div>
            <div id="noot-3">&#9839; &#9834;</div>
            <div id="noot-4">&#9834;</div>
          </div>
        );
      }
      return null; // Return null when showForm is true to hide the notes
    };    

const renderNotes2 = () => {
  if (!showForm) {
    return (
      <div className="notes-container">
        <div id="noot-5">&#9835; &#9833;</div>
        <div id="noot-6">&#9833;</div>
        <div id="noot-7">&#9839; &#9834;</div>
        <div id="noot-8">&#9834;</div>
      </div>
    );
  }
  return null; // Return null when showForm is true to hide the notes
};    

  
    return (
      <div className="ui-container">
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0" />
        <div className="homepage-container">
          <h2 id='descrip-header'>Discover The Groove</h2>
            {renderNotes1()}
          <div className="descrip-container">
            <p id='descrip'> Find the beats per minute, key signature, and mode of your favorite songs. Choose your preferences, upload a song, and get instant results!</p>
          </div>
            <div className='button-container'>
              <button id='startHere' onClick={handleButtonClick}><b>Start Here</b></button>
              {renderNotes2()}
              <hr id='horz-line'></hr>
            </div>
            <ReactModal 
            isOpen={showForm}
            contentLabel="Form Modal"
            className="custom-modal"
            overlayClassName="custom-overlay"
            onRequestClose={() => setShowForm(false)}
            shouldCloseOnOverlayClick={false}
            >
              <button onClick={() => setShowForm(false)} className="material-symbols-outlined" id="form-exit">
                close
              </button>
              <Form/>
            </ReactModal>
        </div>
    </div>
    );
  };
  

export default HomePage;