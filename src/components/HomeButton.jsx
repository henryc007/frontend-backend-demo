import { motion} from 'framer-motion';

const HomeButton = () => {
    return (
        <div className="col d-flex justify-content-end mt-3" style={{alignItems: 'last baseline'}}>
                <motion.div
                    id='home-button'
                    className="btn shadow rounded-4"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ delay: 5 }}
                    key="button"
                    onClick={() => setShowResults(false)}
                    style={{
                        padding: '15px 25px',
                        fontSize: '24px',
                        cursor: 'pointer',
                        textDecoration: 'none',
                        fontFamily: 'Roboto',
                        // position: 'absolute', 
                        // bottom: '30px', 
                        // right: '30px' 
                    }}
                > 
                    <b>Go to Home</b>
                </motion.div>
            </div>
    )
}

export default HomeButton;