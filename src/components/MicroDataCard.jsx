import { motion} from 'framer-motion';

const MicroDataCard = ({resultsData}) => {

    return (
        <div className="card bg-transparent border-0" style={{width: '350px'}}>
            <motion.div
                className="row justify-content-center align-items-center flex-nowrap"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ delay: 0.5 }}
                key="metadata"
                style={{
                    fontFamily: 'Bree Serif',
                    minWidth: '49vw'
                }}
            >
                <div className="col mb-4">
                {resultsData.metaData.metaAlbumArt && (
                <img src={resultsData.metaData.metaAlbumArt} className="card-img-top shadow" alt="Album art" id="album-art" style={{
                    borderRadius: '30px',
                    height: '350px', 
                    width: '350px',
                }}/>
                )}
                </div>
            </motion.div>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ delay: 0.5 }}
                key="metadata"
            >
                <ul className='list-group list-group-flush' style={{fontFamily: 'Bree Serif', listStyle: 'none', fontSize: '20px'}}>
                    <li className='mb-1'>
                        <b style={{fontSize: '23px'}}>Title: </b>
                        {resultsData.metaData.metaTitle}
                    </li>
                    <li className='mb-1'>
                        <b style={{fontSize: '23px'}}>Artist: </b>
                        {resultsData.metaData.metaArtist}
                    </li>
                    <li className='mb-1'>
                        <b style={{fontSize: '23px'}}>Album: </b>
                        {resultsData.metaData.metaAlbum}
                    </li>
                    <li className='mb-1'>
                        <b style={{fontSize: '23px'}}>Genre: </b>
                        {resultsData.metaData.metaGenre}
                    </li>
                </ul>
            </motion.div>
        </div>
    )
}

export default MicroDataCard;