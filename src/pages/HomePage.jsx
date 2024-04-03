import React, { useEffect } from 'react';
import { useState } from 'react';
import "../assets/HomePage.css"
import OpeningScreen from '../components/OpeningScreen';
import NavBar from '../components/NavBar';
import Results from '../components/Results';
import $ from 'jquery';


const HomePage = () => {
  const [showResults, setShowResults] = useState(false);
  const [resultsData, setResultsData] = useState(null);

  useEffect(() => {
    if (showResults) {
    // $('.modal').modal('hide'); // Close the modal
    // $('.modal-backdrop').remove(); // Remove the backdrop
    $('.modal-backdrop').remove();
    }
    
  }, [showResults]);
  
  return (
    <>
    <div className="container-fluid" style={{
      background: 'linear-gradient(to left, #22A699 60%, #F2BE22 85%, #F29727 95%, #F24C3D 100%)',
      height: '100vh',
      width: "100%"
    }}>
      <NavBar/>
      <div id="uicontainer" className="card shadow" style={{backgroundColor: "#EADACB", borderRadius: '30px'}}>
        {!showResults ? (
          <OpeningScreen setShowResults={setShowResults} setResultsData={setResultsData}/>
        ) : (
          <Results resultsData={resultsData} setShowResults={setShowResults}/>
        )}
      </div>
  </div>
  </>
  );
  };
  

export default HomePage;