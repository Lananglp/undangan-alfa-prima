'use client'
import { AnimatePresence, motion } from 'framer-motion';
import React, { useEffect, useState } from 'react'

function ImageSlideShow({ images }) {

    const [index, setIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex(prevIndex => (prevIndex + 1) % images.length);
        }, 5000); // Ganti gambar setiap 5 detik

        return () => clearInterval(interval);
    }, []);

    return (
        <AnimatePresence mode='wait'>
            <motion.div 
                key={index}
                initial={{ scale: 1.2 }}
                animate={{ scale: 1 }}
                // exit={{ scale: 1.1 }}
                transition={{ ease: 'linear', duration: 5 }}
            >
                {/* <motion.img
                    key={index}
                    src={images[index]}
                    className="w-screen xl:w-full h-screen xl:h-[512px] object-cover bg-black"
                    alt={`Undangan ${index + 1}`}
                    initial={{ opacity: 0.25 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0.25 }}
                    transition={{ ease: 'linear', duration: 2.5 }}
                /> */}
                <motion.img
                    key={index}
                    initial={{ opacity: 0.25 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0.25 }}
                    transition={{ ease: 'linear', duration: 2.5 }}
                    src={images[index]}
                    alt='alumni-2022-2023'
                    className='w-full min-h-[20rem] h-[20rem] md:h-[40rem] md:min-h-[40rem] object-cover bg-black'
                    style={{objectPosition: '50% 50%'}}
                />
            </motion.div>
            </AnimatePresence>
    )
}

export default ImageSlideShow