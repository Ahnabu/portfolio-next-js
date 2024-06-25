import { motion } from 'framer-motion';
import React from 'react';


/// variations
const stairAnimation = {
    initial: {
        top: '0%',
    },
    animate: {
        top: '100%',
    },
    exit: {
        top: ['100%', '0%']
    },
};
/// calculate the reverse index fot staagred delay
const reverseIndex = (index) => {
    const totalSteps = 6;
   
        return totalSteps - index - 1;
    }
const Stairs = () => {

    console.log('on stairs');
    return (
        <>
            {[...Array(6)].map((i, index) => {
                return <motion.div
                    key={index} 
                    variants={stairAnimation}
                   initial="initial"
                   animate= 'animate'
                    exit="exit"
                    transition={{
                        duration: 0.4,
                        ease: 'easeInOut',
                        delay: reverseIndex(index) * 0.1,
                        
                    }}
                    className="h-full w-full bg-white relative"
                />
                }
            )}
        </>
    );
};

export default Stairs;