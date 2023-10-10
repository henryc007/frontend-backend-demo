import {React, useState, useEffect} from 'react';
import { useLocation, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import "../assets/Results.css";

export default function Results () {
  const location = useLocation();
  const { resultsData } = location.state;
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
    <div className="ui-container">
      <header>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/jsmediatags/3.9.5/jsmediatags.min.js"></script>
      </header>
      <div className='results-page-container'>
      <AnimatePresence>
        {showContent ? (
          <>
          <motion.div
          className="metadata-container"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ delay: 0.5 }}
          key="metadata"
          > 
            {resultsData.metaData.metaAlbumArt && (
            <img src={resultsData.metaData.metaAlbumArt} alt="Album art" id="album-art"/>
            )}
            <p className={resultsData.metaData.metaAlbumArt ? 'regular-text' : 'larger-text'}><b id="meta-category">Title: </b>
                {resultsData.metaData.metaTitle}
            </p>
            <p className={resultsData.metaData.metaAlbumArt ? 'regular-text' : 'larger-text'}><b id="meta-category">Artist: </b>
                {resultsData.metaData.metaArtist}
            </p>
            <p className={resultsData.metaData.metaAlbumArt ? 'regular-text' : 'larger-text'}><b id="meta-category">Album: </b>
                {resultsData.metaData.metaAlbum}
            </p>
            <p className={resultsData.metaData.metaAlbumArt ? 'regular-text' : 'larger-text'}><b id="meta-category">Genre: </b>
                {resultsData.metaData.metaGenre}
            </p>
          </motion.div>

          <div className="vertical-divider"></div>

          <div className='results-container'>
          {resultsData.bpm && (
          <motion.div
            className="result-item"
            initial={{ x: '-600%' }}
            animate={{ x: 0 }}
            transition={{ delay: 1 }}
            key="bpm"
          > <p> <span id="category">BPM: </span> <span id="value">{resultsData.bpm}</span> </p>
          </motion.div>
          )}
          {resultsData.keySig && (
          <motion.div
          className="result-item"
          initial={{ x: '-600%' }}
          animate={{ x: 0 }}
          transition={{ delay: 2 }}
          key="keySig"
        > <p> <span id="category">Key Signature: </span> <span id="value">{resultsData.keySig}</span></p>
        </motion.div>
          )}
          {resultsData.mode && (
          <motion.div
          className="result-item"
          initial={{ x: '-600%' }}
          animate={{ x: 0 }}
          transition={{ delay: 3 }}
          key="mode"
        > <p> <span id="category">Mode: </span> <span id="value">{resultsData.mode}</span> </p>
        </motion.div>
          )}
          </div>

          <div className='result-button-container'>
          <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ delay: 5 }}
          key="button"
          > <Link to="/" className="home-link">
          <b>Go to Home</b>
          </Link>
          </motion.div>
          </div>
          </>

      ) : (
        <motion.div
          initial={{ opacity: 1, backgroundColor: 'black' }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0, rotateY: 180 }}
          className="blacked-out-page"
          key="blackedOut"
        >
          <div className="blacked-out-overlay"></div>
          <div className="blacked-out-text">
            <h1>The Results</h1>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
    </div>
  </div>
);
};