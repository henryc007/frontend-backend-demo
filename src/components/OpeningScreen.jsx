import FormModal from "./FormModal";
import MusicNotes from "./MusicNotes";
import '../assets/App.css'

const OpeningScreen = ({setShowResults, setResultsData}) => {
    return (
      <div className="container-fluid">
        <div id="homepage" className="card bg-transparent border-0 my-2 m-2 py-2">
          <MusicNotes/>
          <h2 className="card-title" style={{
            fontStyle: 'italic', 
            whiteSpace: 'nowrap',
            marginRight: '50px',
            paddingRight: '50px'
            }}> 
            Discover The Groove
          </h2>
          <p className="card-text" style={{
            fontSize: '1rem', 
            justifyContent: 'center', 
            alignItems: 'center',
            maxWidth: '390px',
            wordBreak: 'break-word' 
          }}
          > 
            Find the beats per minute, key signature, and mode of your favorite songs. 
            Choose your preferences, upload a song, and get instant results!
          </p>
        </div>
        <button id='start-here' type="button" className="btn shadow" data-bs-toggle="modal" data-bs-target="#modal" style={{
              fontSize: '25px',
              padding: '20px 40px',
              border: '0',
              borderRadius: '20px',
              cursor: 'pointer',
              fontFamily: 'Roboto'
            }}>
                <b>Start Here</b>
        </button>
        <FormModal setShowResults={setShowResults} setResultsData={setResultsData}/>
        <div id='horz-line' className='row' style={{width: '99%', marginBottom: '30px', borderBottom: 'solid 2px', marginTop: '40px', marginLeft: '3px'}}></div>
      </div>
    )
}

export default OpeningScreen;