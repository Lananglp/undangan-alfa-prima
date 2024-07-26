'use client'
import { getDataAlumni, postDataAlumni, postDataLecturerGathering2024 } from '@/api/api';
import ButtonWhatsapp from '@/components/ButtonWhatsapp';
import { alert, formatCreatedAt } from '@/helper/Helper';
import { AnimatePresence, motion } from 'framer-motion';
import React, { useRef, useState } from 'react'
import { useForm } from 'react-hook-form';
import { FaCircleCheck, FaSpinner, FaStar } from 'react-icons/fa6'

function FormulirKehadiran() {

    const [modal, setModal] = useState(false);
    const [openList, setOpenList] = useState(false);
    const {register, handleSubmit, watch, reset, formState: { errors },} = useForm();
    const formRef = useRef(null);
    const [isSubmit, setIsSubmit] = useState(false);
    const [process, setProcess] = useState(false);
    // const [alumni, setAlumni] = useState([]);
    // const [loading, setLoading] = useState(true);

    const handleOpen = () => {
        setModal(true);
    }

    const handleClose = () => {
        if (formRef.current) {
            formRef.current.reset();
        }
        reset();
        setModal(false);
    }

    // console.log(watch('nama'));
    // console.log(watch('tempat_kerja'));
    // console.log(watch('jabatan'));
    // console.log(watch('no_wa'));
    // console.log(watch('kehadiran'));

    const onSubmit = async (data) => {
        setProcess(true);
        try {
            const res = await postDataLecturerGathering2024(data, {timeout: 5000});
            if (res.data?.status === 'success') {
                handleClose();
                alert(res.data?.status, res.data?.message);
                setIsSubmit(true);
            }
        } catch (error) {
            if (error.code === 'ECONNABORTED') {
                console.error('Request timed out');
                alert('warning', 'Periksa jaringan anda, lalu lakukan submit ulang.');
            } else {
                console.error('Request failed', error.response);
            }
        } finally {
            setProcess(false);
        }
    }

    // const fetchdata = async () => {
    //     setLoading(true);
    //     try {
    //         const res = await getDataAlumni();
    //         setAlumni(res.data.items);
    //     } catch (error) {
    //         console.log(error.response);
    //     } finally {
    //         setLoading(false);
    //     }
    // }

    // const handleOpenList = () => {
    //     fetchdata();
    //     setOpenList(true);
    // }

    // const handleCloseList = () => {
    //     setOpenList(false);
    // }

    return (
        <>

            {isSubmit ? (
                <div className='flex gap-4 bg-zinc-100 border border-zinc-200 rounded-lg p-6 mb-8'>
                    <FaCircleCheck className='h-16 w-32 md:h-12 md:w-12 text-green-700'/>
                    <div>
                        <p className='mb-2 md:mb-0 text-2xl font-semibold text-zinc-800'>Terimakasih sudah mengisi formulir kehadiran.</p>
                        {/* <p className='text-sm md:text-base'>Silahkan cek nama kamu <button onClick={handleOpenList} type='button' className='inline text-blue-400 underline underline-offset-4 focus:text-blue-300'>disini</button> yaa, untuk memastikan kembali, terimakasih.</p> */}
                        <p className='text-sm md:text-base'>Kehadiran dari Bapak/Ibu sangatlah kami nantikan di acara ini.</p>
                    </div>
                </div>
            ) : (
            <>
                <div className='text-center md:text-start mb-24'>
                    <button onClick={handleOpen} type='button' className={`mt-4 mb-0 inline-block bg-gradient-to-b from-blue-800 to-blue-800 ring-1 ring-transparent hover:scale-[1.025] focus:ring-zinc-400 text-white font-medium text-center rounded shadow-xl shadow-blue-700/50 transition duration-200 px-8 py-3`}>
                        Formulir Kehadiran
                    </button>
                </div>
            </>
            )}

            <AnimatePresence>
                {modal &&
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ type: 'spring', bounce: 0, ease: 'easeInOut', delay: 0, duration: 0.5 }} tabIndex={-1} aria-hidden="true" className="overflow-y-auto overflow-x-hidden fixed inset-0 z-50 flex justify-center items-center w-full h-modal md:h-full bg-black/15">
                        <div className="relative p-4 w-full max-w-2xl h-auto">
                            <div className="relative p-4 bg-white border border-zinc-200 rounded-lg shadow sm:p-5">
                                <div className="flex justify-between items-center pb-4 mb-4 rounded-t border-b sm:mb-5 border-zinc-200">
                                    <h3 className="text-lg font-semibold text-zinc-800">
                                        Formulir Kehadiran
                                    </h3>
                                    <button onClick={handleClose} type="button" className="text-zinc-400 bg-transparent hover:bg-zinc-200 hover:text-zinc-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-zinc-600 dark:hover:text-white" data-modal-toggle="defaultModal">
                                        <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" /></svg>
                                        <span className="sr-only">Close modal</span>
                                    </button>
                                </div>
                                <form ref={formRef} onSubmit={handleSubmit(onSubmit)}>
                                    {/* <div className="grid gap-4 mb-4 sm:grid-cols-2"> */}
                                    <div className="grid grid-cols-1 gap-4 mb-4">
                                        <div>
                                            <label htmlFor="nama" className="block mb-2 text-sm font-medium text-zinc-800">Nama <span className='text-xs text-red-400'>*</span></label>
                                            <input {...register("nama", { required: true })} type="text" name="nama" id="nama" className="border border-zinc-300 text-sm rounded-lg outline-none focus:ring-2 focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 bg-zinc-100 text-zinc-800" placeholder="Nama" />
                                            {errors.nama && <p className='mt-2 text-xs text-red-400'>Bagian ini tidak boleh kosong.</p>}
                                        </div>
                                        {/* <div>
                                            <label htmlFor="tempat_kerja" className="block mb-2 text-sm font-medium text-zinc-800">Tempat Kerja <span className='text-xs text-zinc-400'>(Opsional)</span></label>
                                            <input {...register("tempat_kerja")} type="text" name="tempat_kerja" id="tempat_kerja" className="border border-zinc-300 text-sm rounded-lg outline-none focus:ring-2 focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 bg-zinc-100 text-zinc-800" placeholder="Tempat Kerja" />
                                            {errors.tempat_kerja && <p className='mt-2 text-xs text-red-400'>Bagian ini tidak boleh kosong.</p>}
                                        </div>
                                        <div>
                                            <label htmlFor="jabatan" className="block mb-2 text-sm font-medium text-zinc-800">Jabatan <span className='text-xs text-zinc-400'>(Opsional)</span></label>
                                            <input {...register("jabatan")} type="text" name="jabatan" id="jabatan" className="border border-zinc-300 text-sm rounded-lg outline-none focus:ring-2 focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 bg-zinc-100 text-zinc-800" placeholder="Jabatan" />
                                            {errors.jabatan && <p className='mt-2 text-xs text-red-400'>Bagian ini tidak boleh kosong.</p>}
                                        </div> */}
                                        <div>
                                            <label htmlFor="no_wa" className="block mb-2 text-sm font-medium text-zinc-800">No WA <span className='text-xs text-red-400'>*</span></label>
                                            <input {...register("no_wa", { required: true })} type="number" name="no_wa" id="no_wa" className="border border-zinc-300 text-sm rounded-lg outline-none focus:ring-2 focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 bg-zinc-100 text-zinc-800" placeholder="+62**" />
                                            {errors.no_wa && <p className='mt-2 text-xs text-red-400'>Bagian ini tidak boleh kosong.</p>}
                                        </div>
                                        <div>
                                            <label htmlFor="kehadiran" className="block mb-2 text-sm font-medium text-zinc-800">Status kehadiran <span className='text-xs text-red-400'>*</span></label>
                                            <select {...register("kehadiran", { required: true })} id="kehadiran" name='kehadiran' className="border border-zinc-300 text-sm rounded-lg outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 bg-zinc-100 text-zinc-800">
                                                <option value="">Pilih</option>
                                                <option value="1">Hadir</option>
                                                <option value="2">Tidak Hadir</option>
                                            </select>
                                            {errors.kehadiran && <p className='mt-2 text-xs text-red-400'>Bagian ini tidak boleh kosong.</p>}
                                        </div>
                                    </div>
                                    <div className='text-end'>
                                        <button disabled={process ? true : false} type='submit' className={`mt-4 mb-0 inline-block bg-gradient-to-b from-blue-800 to-blue-800 disabled:brightness-75 ring-2 ring-transparent hover:scale-[1.025] focus:ring-blue-400 text-white font-medium text-center rounded shadow-xl shadow-blue-700/50 transition duration-200 px-8 py-2`}>
                                            {process ? <span><FaSpinner className='animate-spin inline h-3 w-3 mb-0.5 me-1'/> Loading...</span> : 'Kirim'}
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </motion.div>
                }
            </AnimatePresence>

            <AnimatePresence>
                {openList &&
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ type: 'spring', bounce: 0, ease: 'easeInOut', delay: 0, duration: 0.5 }} tabIndex={-1} aria-hidden="true" className="overflow-y-auto overflow-x-hidden fixed inset-0 z-50 flex justify-center items-center w-full h-modal md:h-full bg-black/50">
                        <div className="relative p-4 w-full max-w-2xl">
                            <div className="relative p-4 bg-zinc-800/30 border border-zinc-800 backdrop-blur-sm rounded-lg shadow sm:p-5 h-auto max-h-[80vh] overflow-y-auto">
                                <div className="flex justify-between items-center pb-4 mb-4 rounded-t border-b sm:mb-5 border-zinc-700">
                                    <h3 className="text-lg font-semibold text-white">
                                        List Alumni yang sudah mengisi
                                    </h3>
                                    <button onClick={handleCloseList} type="button" className="text-zinc-400 bg-transparent hover:bg-zinc-200 hover:text-zinc-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-zinc-600 dark:hover:text-white" data-modal-toggle="defaultModal">
                                        <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" /></svg>
                                        <span className="sr-only">Close modal</span>
                                    </button>
                                </div>
                                
                                {/* <div className="relative sm:rounded-lg overflow-hidden">
                                    <div className="overflow-x-auto">
                                        <table className="w-full text-sm text-left">
                                            <thead className="text-xs text-blue-400 uppercase">
                                                <tr>
                                                    <th scope="col" className="px-4 py-3">No</th>
                                                    <th scope="col" className="px-4 py-3">Nama</th>
                                                    <th scope="col" className="px-4 py-3">Waktu Pengisian</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {!loading ? (
                                                    alumni.length > 0 ? (
                                                        alumni.map((a, index) => {
                                                            return (
                                                                <tr className="border-b border-zinc-700" key={index}>
                                                                    <td className="px-4 py-3">{index + 1}</td>
                                                                    <th scope="row" className="px-4 py-3 font-medium whitespace-nowrap text-white">{a.nama}</th>
                                                                    <td className="px-4 py-3">{formatCreatedAt(a.created_at)}</td>
                                                                </tr>
                                                            )
                                                        })
                                                    ) : (
                                                        <tr className="border-b border-zinc-700">
                                                            <td colSpan={3} className="px-4 py-3">Belum ada data alumni.</td>
                                                        </tr>
                                                    )
                                                ) : (
                                                    <tr className="border-b border-zinc-700">
                                                        <td colSpan={3} className="px-4 py-3"><FaSpinner className='inline-block h-4 w-4 animate-spin'/> <span className='inline-block ms-1'>Loading...</span></td>
                                                    </tr>
                                                )
                                                }
                                            </tbody>
                                        </table>
                                    </div>
                                </div> */}
                            </div>
                        </div>
                    </motion.div>
                }
            </AnimatePresence>
        </>
    )
}

export default FormulirKehadiran