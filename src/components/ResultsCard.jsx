import { motion} from 'framer-motion';
import "../assets/Results.css";

const ResultsCard = ({resultsData, setShowResults}) => {
    return (
        <div className="card bg-transparent border-0 d-flex align-items-center justify-content-center" style={{marginTop: '20px'}}>
            <ul className='list-group list-group-flush' style={{listStyle: 'none'}}>
              {resultsData.bpm && (
              <motion.div
                  initial={{ x: '-600%' }}
                  animate={{ x: 0 }}
                  transition={{ delay: 1 }}
                  key="bpm"
              > <li> 
                    <span id="category">
                      BPM: </span> 
                    <span id="value">
                      {resultsData.bpm}
                    </span> 
                  </li>
              </motion.div>
                )}
              {resultsData.keySig && (
              <motion.div
                  className="result-item"
                  initial={{ x: '-600%' }}
                  animate={{ x: 0 }}
                  transition={{ delay: 2 }}
                  key="keySig"
              >   <li> 
                    <span id="category">
                      Key Signature: </span> 
                    <span id="value">
                      {resultsData.keySig}
                    </span>
                  </li>
              </motion.div>
                )}
              {resultsData.mode && (
              <motion.div
                  className="result-item"
                  initial={{ x: '-600%' }}
                  animate={{ x: 0 }}
                  transition={{ delay: 3 }}
                  key="mode"
              >   <li> 
                    <span id="category">Mode: </span> 
                    <span id="value">
                      {resultsData.mode}
                    </span> 
                  </li>
              </motion.div>
                )}
            </ul>
        </div>
    )
}

export default ResultsCard;