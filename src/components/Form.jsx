import {React, useState, useCallback} from 'react';
import {useNavigate} from 'react-router-dom';
import axios from 'axios';
import { useDropzone } from "react-dropzone";
import {Audio} from 'react-loader-spinner';
import { toast } from "react-toastify";


 // displays warning and error messages
const notify = (message, type) => {
  const toastMethods = {
    default: toast,
    warning: toast.warn,
    error: toast.error,
  };

  const selectedToast = toastMethods[type];

  selectedToast(message, {
    position: "top-center",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "colored",
  });
};

const Form = () => {
  const navigate = useNavigate();
  const [formOptions, setFormOptions] = useState({
    keySig: false,
    mode: false,
    bpm: false
  });
  const [audioFile, setAudioFile] = useState(null);
  const [loading, setLoading] = useState(false);

  //following three functions handle memoization of bpm, key sig, and mode boolean input
  const handleBpmChange = useCallback(() => {
    setFormOptions((prevOptions) => ({ ...prevOptions, bpm: !prevOptions.bpm }));
  }, []);

  const handleKeySigChange = useCallback(() => {
    setFormOptions((prevOptions) => ({ ...prevOptions, keySig: !prevOptions.keySig }));
  }, []);


  const handleModeChange = useCallback(() => {
    setFormOptions((prevOptions) => ({ ...prevOptions, mode: !prevOptions.mode }));
  }, []);

  //handles memoization of audio file input
  const handleAudioFileChange = useCallback((acceptedFiles) => {
    setAudioFile(acceptedFiles[0]);
  }, []);

  // deals with the web app's dropbox and collecting the user's file
  const onDrop = (acceptedFiles) => {
    handleAudioFileChange(acceptedFiles);

  };

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: "audio/*",
    maxFiles: 1,
  });

  //resets form settings if error is caught while connecting to server
  const resetForm = () => {
    setAudioFile(null);
    setFormOptions({
      keySig: false,
      mode: false,
      bpm: false
    });
  };


  // handles parsing data and transmitting it once a form has been submitted
  const handleSubmit = async (event) => {
    event.preventDefault();
    
    // display notification if no audio file has been input
    if (audioFile === null) {
      notify("No song has been added for analyzing. Please drop an audio file into the dropbox.", "warning");
      return;
    }

    // display notification if no booleans have been selected
    if (formOptions.bpm === false && formOptions.keySig === false && formOptions.mode === false) {
      notify("Please select at least one checkbox before submitting.", "warning");
      return; 
    }

    // triggers page loading animation
    setLoading(true);

    // utilizes FormData to store file information for better transmisison packaging for axios
    const formData = new FormData();
    formData.append('file', audioFile); 
    
    // verifies which booleans have been selected by user for submission use and stores in the following set
    const selectedValues = {}; 
    
    if (formOptions.bpm !== false) {
      selectedValues.bpm = true;
    }
    if (formOptions.keySig !== false) {
      selectedValues.keySig = true;
    }
    if (formOptions.mode !== false) {
      selectedValues.mode = true;
    }
    try {

      // sends audio file data to server for further analyzing
      const analyzeData = await axios.post('http://localhost:7000/analyze', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        }, });
        const dataToSend = {
          metaData: analyzeData.data.metaData,
          ...(formOptions.bpm && { bpm: Math.round(analyzeData.data.bpm) }),
          ...(formOptions.keySig && { keySig: analyzeData.data.keySig }),
          ...(formOptions.mode && {
            mode: analyzeData.data.mode === "major" ? "Major" : "Minor",
          }),
        };

    // navigates to /Results page once infomration from form is analyzed
    navigate('/Results', {
      state: {
        resultsData: dataToSend,
      },
    });
    } catch (error) {
      console.error('Analyze request error:', error);
      if (error.response) {
        console.log('Server Error Message:', error.response.data.message);
        notify(error.response.data.error, "error");
      } else {
        console.log('Unknown Server Error', error);
        notify('An unknown server error occurred', "error");
      }

      setLoading(false);
      resetForm();
    }
  };

  return (
    <div className="form-container">
      <header>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0" />
      </header>
    <form onSubmit={handleSubmit}>
        <label>
          <input
            type="checkbox"
            checked={formOptions.bpm}
            onChange={(handleBpmChange)}
          />
          Beats Per Minute
        </label>
        <br />
        <label>
          <input
            type="checkbox"
            checked={formOptions.keySig}
            onChange={(handleKeySigChange)}
          />
          Key Signature
        </label>
        <br />
        <label>
          <input
            type="checkbox"
            checked={formOptions.mode}
            onChange={(handleModeChange)}
          />
          Mode (Major or Minor key)
        </label>
        <div {...getRootProps()} id="audioDrop">
          <input {...getInputProps()} />
          <span className="material-symbols-outlined" id="dropbox-logo">
            place_item
            </span>
          Drop Audio File Here
        </div>
        {audioFile && (
          <div className="audio-file-container">
            <b>Selected Audio File:</b> {" "}
            {audioFile.name.length > 31 // adjusts the character count as needed
              ? audioFile.name.substring(0, 31) + "..." // truncates the name if it's too long
              : audioFile.name}
          </div>
        )}
        <button id='formSubmit' type="submit">Submit</button>
    </form>
    {loading && (
        <div className="loading-spinner">
          <div id="actual-spinner">
          <Audio color="#00BFFF" height={120} width={120} />
          <p className="loading-text">Loading</p>
          </div>
        </div>
      )}
  </div>
  );
};
export default Form;