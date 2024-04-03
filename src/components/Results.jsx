import {React, useState, useEffect} from 'react';
import { useLocation, Link } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import "../assets/Results.css";
import BlackOutLayout from './BlackOutLayout';
import MicroDataCard from './MicroDataCard';
import ResultsCard from './ResultsCard';
import HomeButton from './HomeButton';

const Results = ({resultsData, setShowResults}) => {
    // const location = useLocation();
    // const { resultsData } = location.state;
    const [showContent, setShowContent] = useState(false);
  
    useEffect(() => {
      // delays the results page transition after 5 seconds
      const timeout = setTimeout(() => {
        setShowContent(true);
      }, 5000);
  
      // cleans up the timeout on component unmount
      return () => clearTimeout(timeout);
    }, []);
  
    return (
      <div className="card-body d-flex flex-md-row flex-column" style={{width: '100%'}}>
        <AnimatePresence>
          {showContent ? (
            <>
            <div className="col justify-content-center d-flex">
              <MicroDataCard resultsData={resultsData}/>
            </div>
            <div id="vertical-line" className="col-1 mx-2" style={{width: '3px', background: 'linear-gradient(to bottom, black 0%, #3a3434 30%, transparent 100%)', marginTop: '-17px'}}></div>
            <div className="col d-flex justify-content-center flex-column" style={{overflow: 'hidden'}}>
              <div className='row' style={{marginTop: '20px'}}>
              <ResultsCard resultsData={resultsData} setShowResults={setShowResults}/>
              </div>
              {/* <div className="row bg-primary"> */}
                <HomeButton/>
              {/* </div> */}
            </div>
            </>
        ) : (
          <BlackOutLayout/>
        )}
      </AnimatePresence>
    </div>
  );
  };

  export default Results;