'use client'
import { AnimatePresence, motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { FaWhatsapp, FaXmark } from 'react-icons/fa6'

function ButtonWhatsapp({type, image, name, description, children}) {

    const [show, setShow] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setShow(true);
            // notificationSound();
        }, 5000);
    }, []);

    // const notificationSound = () => {
    //     const audio = new Audio('/audio/notification.mp3');
    //     audio.play();
    // }

  return (
    <AnimatePresence>
        {show &&
            <motion.div 
                className='inline-block fixed z-10 bottom-4 end-4'
                initial={{ translateX: '100%', opacity: 0 }}
                animate={{ translateX: '0%', opacity: 1 }}
                exit={{ translateX: '100%', opacity: 0 }}
                transition={{duration: 0.3, ease: 'circInOut'}}
            >
                {type === 1 &&
                    <div className='w-72 relative border border-zinc-700 backdrop-blur-sm bg-zinc-800/50 rounded shadow-xl shadow-zinc-950/10 dark:shadow-zinc-950/50 p-4'>
                        <button onClick={() => setShow(false)} title='Close' type="button" className='absolute top-4 end-4'><FaXmark className='hover:text-white' /></button>
                        <Image src="/image/profile/LanangLanusa.webp" alt='LanangLanusa.webp' width={48} height={48} className='h-auto w-auto rounded-full mx-auto mt-2' />
                        <div className='text-center mt-2'>
                            <h6 className='text-sm text-white'>Kadek Lanang Lanusa Putera</h6>
                            <p className='mb-3 text-xs'>IT Programmer</p>
                        </div>
                        <Link href="/" type="button" className='block text-center bg-green-700 hover:bg-green-800 focus:ring-1 ring-zinc-300 rounded text-sm text-white px-4 py-1.5 transition duration-200'>
                            <FaWhatsapp className='inline h-4 w-4 me-1 mb-0.5' />
                            Hubungi Sekarang
                        </Link>
                    </div>
                }
                {type === 2 &&
                    <div className='w-72 h-auto relative border border-zinc-700 backdrop-blur-sm bg-zinc-800/50 rounded shadow-xl shadow-zinc-950/10 dark:shadow-zinc-950/50 p-4'>
                        <button onClick={() => setShow(false)} title='Close' type="button" className='absolute top-4 end-4'><FaXmark className='hover:text-white' /></button>
                        <div className='flex'>
                            <div>
                                <Image src={`${image ? image : "/image/profile/LanangLanusa.webp"}`} alt='LanangLanusa.webp' width={128} height={128} className='h-auto w-auto rounded-full mx-auto mt-2' />
                            </div>
                            <div>
                                <div className='ps-4 mt-2'>
                                    <h6 className='text-sm text-white mb-1'>{name ? name : 'Kadek Lanang Lanusa Putera'}</h6>
                                    <p className='mb-3 text-xs'>{description ? description : 'IT Programmer'}</p>
                                </div>
                            </div>
                        </div>
                        {children ? (
                            children
                        ) : (
                            <Link href="/" type="button" className='block text-center bg-green-700 hover:bg-green-800 focus:ring-1 ring-zinc-300 rounded text-sm text-white px-4 py-1.5 transition duration-200'>
                                <FaWhatsapp className='inline h-4 w-4 me-1 mb-0.5' />
                                Hubungi Sekarang
                            </Link>
                        )}
                    </div>
                }
            </motion.div>
        }
    </AnimatePresence>
  )
}

export default ButtonWhatsapp