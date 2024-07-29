'use client'
import React, { useEffect, useRef, useState } from 'react'
import ImageSlideShow from './ImageSlideShow';
import { FaPause, FaPlay, FaStar } from 'react-icons/fa6';
import FormulirKehadiran from './FormulirKehadiran';
import { AnimatePresence, motion } from 'framer-motion';
import ParallaxSection from '@/components/ParallaxSection';
import { alert } from '@/helper/Helper';
import Image from 'next/image';

function SectionUndangan({acara, tagline, description, tujuan, dressCode, tanggal, waktu, tempat, roundown, images}) {

    const [open, setOpen] = useState(false); // default : false // ini state open wedding
    const [music, setMusic] = useState(false); // state musik
    const audioRef = useRef(null);

    const handleOpen = () => {
        setTimeout(() => {
            setOpen(true);
        }, 500);
        setMusic(true);
        audioRef.current.play();
    };

    const toggleMusic = () => {
        if (music) {
            audioRef.current.pause();
        } else {
            audioRef.current.play();
        }
        setMusic(!music);
    };

    // kodingan copy rekening
    const [copyRek, setCopyRek] = useState(false);

    const handleCopy = () => {
        navigator.clipboard.writeText(rekening).then(() => {
        setCopyRek(true);
        setTimeout(() => {
            setCopyRek(false);
        }, 2000);
        }).catch(err => {
            console.error('Failed to copy: ', err);
        });
    };

    // disabled klik kanan dan keyboard untuk inspect
    useEffect(() => {
        const disabledRightClick = (e) => {
            e.preventDefault();
        }

        const disabledKeyInspect = (event) => {
          if (event.ctrlKey && event.shiftKey && (event.key === 'I' || event.key === 'i')) {
            event.preventDefault();
          }
        };
    
        window.addEventListener('keydown', disabledKeyInspect);
        window.addEventListener('contextmenu', disabledRightClick);
    
        return () => {
          window.removeEventListener('keydown', disabledKeyInspect);
          window.addEventListener('contextmenu', disabledRightClick);
        };
    }, []);

    return (
        <>
            <audio ref={audioRef} src='/audio/Jingle-alfaprima.mp3'/>

            <AnimatePresence mode='wait'>
                {!open &&
                    <motion.main
                        className='relative'
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ ease: 'easeInOut', duration: 1 }}
                    >
                        {/* <div className='absolute -z-10 inset-x-0 top-0'>
                            <ParallaxSection offset={400}>
                                <div className='overflow-hidden'>
                                    <ImageSlideShow images={images} />
                                </div>
                                <div className='absolute inset-0 bg-gradient-to-t from-blue-950 to-transparent from-[0%] to-[30%]' />
                            </ParallaxSection>
                        </div> */}
                        <div className='absolute -z-10 inset-x-0 top-0'>
                            <Image src="https://daftar.alfaprima.id/img/background-alfaprima.jpg" alt='thumbnail' width={1920} height={1080} className='h-48 md:h-[392px] w-full object-cover bg-zinc-200' style={{objectPosition: '50% 50%'}}/>
                        </div>
                        <div className='mx-4 md:mx-16 lg:mx-40 xl:mx-64 pt-24'>
                            <Image src={images[0]} alt='thumbnail' width={1920} height={1080} className='aspect-video object-cover rounded-xl bg-zinc-200'/>
                            {/* <Image src={images[1]} alt='thumbnail' width={1920} height={1080} className='h-[392px] w-full object-cover rounded-xl bg-zinc-200' style={{objectPosition: '50% 80%'}}/> */}
                            <div className='lg:grid lg:grid-cols-1'>
                                <div>
                                    {/* <h1 className='mb-4 mt-8 max-w-4xl leading-tight text-4xl font-light text-white'><span className='text-5xl'>Temu Alumni</span> :<br />Berkumpul Kembali <span className='text-teal-400 font-normal'>&quot;Your Second Home&quot;</span></h1> */}
                                    <h1 className='mb-4 mt-8 max-w-4xl leading-tight text-4xl font-bold text-zinc-800'>{acara}</h1>
                                    <p className='leading-8 text-lg italic font-medium'>&quot; {tagline} &quot;</p>
                                    {/* <p className='mb-4 text-sm'><span className='text-zinc-500'>Design & Support by :</span><br />Kadek Lanang Lanusa Putera <br /> <span className='text-teal-600'>IT Programmer Alfa Prima</span></p> */}
                                    <div className='text-center md:text-start my-12'>
                                        <p className='mb-2 font-medium text-zinc-700'>Kepada Yth:</p>
                                        <p className='mb-8 text-xl font-bold text-zinc-800'>Seluruh Dosen Alfa Prima</p>
                                        <button onClick={handleOpen} type='button' className={`mt-4 mb-0 inline-block bg-gradient-to-b from-blue-800 to-blue-800 ring-1 ring-transparent hover:scale-[1.025] focus:ring-zinc-400 text-white font-medium text-center rounded shadow-xl shadow-blue-700/50 transition duration-200 px-8 py-3`}>
                                            Buka Undangan
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.main>
                }
            </AnimatePresence>
            <AnimatePresence mode='wait'>
                {open &&
                    <motion.main
                        className='relative'
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ ease: 'easeInOut', duration: 1, delay: 1 }}
                    >
                        {/* <div>
                            <div className='overflow-hidden'>
                                <ImageSlideShow images={images} />
                            </div>
                        </div> */}
                        <div className='absolute -z-10 inset-x-0 top-0'>
                            <Image src="https://daftar.alfaprima.id/img/background-alfaprima.jpg" alt='thumbnail' width={1920} height={1080} className='h-[392px] w-full object-cover bg-zinc-200' style={{objectPosition: '50% 50%'}}/>
                        </div>
                        <div className='mx-4 md:mx-16 lg:mx-40 xl:mx-64 pt-24'>
                            <Image src={images[0]} alt='thumbnail' width={1920} height={1080} className='aspect-video object-cover rounded-xl bg-zinc-200'/>
                            {/* <Image src={images[0]} alt='thumbnail' width={1920} height={1080} className='h-[392px] w-full object-cover rounded-xl bg-zinc-200' style={{objectPosition: '50% 50%'}}/> */}
                            <div className='lg:grid lg:grid-cols-1'>
                                <div>
                                    <h1 className='my-12 max-w-4xl leading-tight text-4xl font-bold text-zinc-800'>{acara}</h1>
                                    <div className='mb-8 p-6 bg-primary rounded-lg'>
                                        <h2 className='leading-8 text-lg italic text-white font-medium'>&quot; {tagline} &quot;</h2>
                                    </div>
                                    <div className='relative'>
                                        <p className='mb-4 leading-8'>Halo {tujuan} Kampus Alfa Prima,</p>
                                        <p className='mb-8 text-justify'>{description}</p>
                                        {/* <p className='mb-4'>Adapun kegiatan Lecturer Gathering akan dilaksanakan pada :</p> */}
                                        <table className='mb-8 w-full'>
                                            <tbody>
                                                <tr>
                                                    <td className='w-[0%]'>Tanggal</td>
                                                    <td className='w-[10%] text-center'>:</td>
                                                    <td className='w-[90%]'>{tanggal}</td>
                                                </tr>
                                                <tr>
                                                    <td className='w-[0%]'>Waktu</td>
                                                    <td className='w-[10%] text-center'>:</td>
                                                    <td className='w-[90%]'>{waktu}</td>
                                                </tr>
                                                <tr>
                                                    <td className='w-[0%]'>Tempat</td>
                                                    <td className='w-[10%] text-center'>:</td>
                                                    <td className='w-[90%]'>{tempat}</td>
                                                </tr>
                                                <tr>
                                                    <td className='w-[0%]'>Dresscode</td>
                                                    <td className='w-[10%] text-center'>:</td>
                                                    <td className='w-[90%]'>{dressCode}</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                    <FormulirKehadiran />
                                    <div className='mb-12 relative'>
                                        <div className='text-center md:text-start mb-12'>
                                            <h3 className='leading-tight text-2xl font-bold text-zinc-800'>Rundown Acara {acara}</h3>
                                        </div>
                                        {roundown.length > 0 &&
                                            roundown.map((r, index) => {
                                                return (
                                                    <div className='flex flex-row justify-center md:justify-start gap-4' key={index}>
                                                        <div className='basis-1/3 md:basis-32'>
                                                            <p className='text-end'>{r.waktu}</p>
                                                            <p className='text-end text-sm text-blue-700'>{r.durasi}</p>
                                                        </div>
                                                        <div className='basis-2/3 md:basis-auto border-s border-blue-700 ps-4 pb-8'>
                                                            <h6 className='mb-2 text-lg font-semibold text-zinc-800'>{r.kegiatan}</h6>
                                                            {r.deskripsi && <p className='ps-4 mb-4 max-w-xl'>{r.deskripsi}</p>}
                                                            {r.oleh && <p className='max-w-xl text-sm'>Oleh : <span className='text-blue-700'>{r.oleh}</span></p>}
                                                        </div>
                                                    </div>
                                                )
                                            })
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>

                        <motion.button 
                            onClick={toggleMusic}
                            className='fixed bottom-4 end-4 h-12 w-12 flex justify-center items-center border border-blue-700 backdrop-blur-sm rounded-lg text-blue-700 bg-white focus:ring-1 ring-blue-400'
                        >
                            {music ? <FaPause className=' animate-pulse'/> : <FaPlay/>}
                        </motion.button>
                    </motion.main>
                }
            </AnimatePresence>
        </>
    )
}

export default SectionUndangan