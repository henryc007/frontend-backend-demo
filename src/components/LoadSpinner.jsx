import {Audio} from 'react-loader-spinner';

const LoadSpinner = () => {
    return (
        <div className="loading-spinner">
            <div id="actual-spinner">
                <Audio color="#00BFFF" height={120} width={120} />
            <p className="loading-text">Loading</p>
            </div>
      </div>
    )
}

export default LoadSpinner;