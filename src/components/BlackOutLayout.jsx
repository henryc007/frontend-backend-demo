import { motion } from 'framer-motion';

const BlackOutLayout = () => {
    return (
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
    )
}

export default BlackOutLayout;