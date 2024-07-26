import React from 'react'
import './undanganAlumniAP2024.css'
import Image from 'next/image'
import { Bona_Nova } from 'next/font/google';
import { FaArrowRight, FaInstagram, FaLinkedin, FaStar, FaTiktok, FaYoutube } from 'react-icons/fa6';
import Link from 'next/link';
import FormulirKehadiran from './FormulirKehadiran';
import ImageSlideShow from './ImageSlideShow';
import SectionUndangan from './SectionUndangan';

const bona_Nova = Bona_Nova({ 
  subsets: ["latin"],
  weight: ["400","700"]
});

export const metadata = {
  title: "Undangan Lecturer Gathering 2024",
  description: "Menjadi pilihan pertama dari perusahaan-perusahaan yang membutuhkan SDM",
  generator: 'Alfa Prima',
  applicationName: 'Alfa Prima',
  referrer: 'origin-when-cross-origin',
  keywords: ['undangan Lecturer Gathering'],
  // authors: [{ name: 'Seb' }, { name: 'Josh', url: 'https://nextjs.org' }],
  // creator: 'Lanang Lanusa',
  // publisher: 'Lanang Lanusa',
  // formatDetection: {
  //   email: false,
  //   address: false,
  //   telephone: false,
  // },
  openGraph: {
    title: 'Undangan Lecturer Gathering 2024',
    description: `Dalam rangka mempererat hubungan bersama dosen, Alfa Prima melaksanakan Lecturer Gathering.`,
    // url: 'https://nextjs.org',
    siteName: 'Undangan Alfa Prima',
    images: [
      // {
      //   url: 'https://ashurabali.com/image/undangan/alumni_ap_2024/bg13.webp', // Must be an absolute URL
      //   width: 800,
      //   height: 600,
      // },
      // {
      //   url: 'https://ashurabali.com/image/undangan/alumni_ap_2024/bg13.webp', // Must be an absolute URL
      //   width: 1800,
      //   height: 1600,
      //   alt: 'Alumni Alfa Prima',
      // },
      {
        url: 'https://undangan.alfaprima.id/image/foto-bersama-dosen/bg1.jpeg', // Must be an absolute URL
        width: 1920,
        height: 1080,
        alt: 'para Dosen Alfa Prima',
      },
    ],
    locale: 'id-ID',
    type: 'website',
    robots: {
      index: false,
      follow: true,
      nocache: true,
      googleBot: {
        index: true,
        follow: false,
        noimageindex: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    // icons: {
    //   icon: '/icon.png',
    //   // shortcut: '/shortcut-icon.png',
    //   apple: '/apple-icon.png',
    //   // other: {
    //   //   rel: 'apple-touch-icon-precomposed',
    //   //   url: '/apple-touch-icon-precomposed.png',
    //   // },
    // },
    // manifest: 'https://nextjs.org/manifest.json',
  },
};

function page() {

  const acara = "Undangan Lecturer Gathering";
  const tagline = "Togetherness and Warmth in Your Second Home";
  const description = "Dalam rangka mempererat hubungan dengan tenaga pengajar (dosen) dan menumbuhkan kembali rasa #yoursecondhome di lingkungan Alfa Prima maka Alfa Prima Denpasar akan melaksanakan Lecturer Gathering. Bersama undangan ini kami mengundang bapak/ibu untuk hadir dan mengisi sharing session untuk seluruh dosen.";
  const tujuan = "Dosen";
  const tanggal = '1 Agustus 2024';
  const waktu = '17:00 WITA - Selesai';
  const tempat = 'Zodiac XII Cofee & Eatery, Jl. Raya Puputan No.54 Denpasar';
  const dressCode = 'Atasan Putih dan Bawahan Menyesuaikan';

  const roundown = [
    {
      waktu: '16:00 - 16:30',
      kegiatan: 'Registrasi',
      durasi: '30 Menit',
    },
    {
      waktu: '16:30 - 17:00',
      kegiatan: 'Welcome Drink',
      durasi: '30 Menit',
    },
    {
      waktu: '17:00 - 17:05',
      kegiatan: 'Pembukaan dan Pengantar dari MC',
      durasi: '5 Menit',
    },
    {
      waktu: '17:05 - 17:10',
      kegiatan: 'Doa',
      durasi: '5 Menit',
    },
    {
      waktu: '17:10 - 17:20',
      kegiatan: 'Sambutan Kepala Cabang',
      durasi: '10 Menit',
    },
    {
      waktu: '17:20 - 17:50',
      kegiatan: 'Selayang Pandang Alfa Prima',
      durasi: '30 Menit',
      oleh: 'Bapak Putu Trisna Hady Permana',
    },
    {
      waktu: '17:50 - 18:20',
      kegiatan: 'Sharing Session',
      durasi: '30 Menit',
      oleh: 'Bapak I Made Artana',
    },
    {
      waktu: '18:20 - 18:35',
      kegiatan: 'Penyampaian Pesan dan Kesan dari Dosen',
      durasi: '15 Menit',
    },
    {
      waktu: '18:35 - 18:40',
      kegiatan: 'Foto Bersama',
      durasi: '5 Menit',
    },
    {
      waktu: '18:40 - 18:45',
      kegiatan: 'Ice Breaking',
      durasi: '5 Menit',
    },
    {
      waktu: '18:45 - 19:00',
      kegiatan: 'Penyerahan Penghargaan dan Games',
      durasi: '15 Menit',
    },
    {
      waktu: '19:00 - 19:45',
      kegiatan: 'Ramah Tamah: Makan Malam dan Hiburan',
      durasi: '45 Menit',
    },
    {
      waktu: '19:45 - 19:50',
      kegiatan: 'Penutup',
      durasi: '5 Menit',
    },
  ];

  const images = [
    '/images/foto-bersama-dosen/bg1.jpeg',
    '/images/foto-bersama-dosen/bg2.jpeg',
    '/images/foto-bersama-dosen/bg3.jpeg',
    '/images/foto-bersama-dosen/bg4.jpeg',
    '/images/foto-bersama-dosen/bg5.jpeg',
  ];

  return (
    <div className='relative'>
      <header className='absolute z-10 inset-x-0 top-0'>
        <div className='mb-4 mt-5 mx-4 md:mx-16 lg:mx-40 xl:mx-64'>
          {/* <div className='flex justify-center items-center gap-0'>
            <Image src='https://www.alfaprima.id/images/logo/logo-alfa-prima-with-text.svg' alt='Alfa Prima Logo' width={202} height={40} className='w-auto h-auto'/>
          </div> */}
          <div className='flex justify-center items-center gap-0'>
            <Image src='https://dev.alfaprima.id/assets/img/logo/AP-W.png' alt='Alfa Prima Logo' width={128} height={128} className='w-14 h-14'/>
            <p className={`${bona_Nova.className} text-2xl text-white ms-2`}>ALFA PRIMA</p>
          </div>
        </div>
      </header>
        <SectionUndangan acara={acara} tagline={tagline} description={description} tujuan={tujuan} dressCode={dressCode} tanggal={tanggal} waktu={waktu} tempat={tempat} roundown={roundown} images={images}/>
        <footer className="px-4 bg-zinc-100 border-t border-zinc-200 pt-12">
          <div className="mx-auto max-w-screen-xl text-center">
            <div className='flex justify-center items-center gap-0'>
              <Image src='https://www.alfaprima.id/images/logo/logo-alfa-prima-with-text.svg' alt='Alfa Prima Logo' width={202} height={40} className='w-auto h-auto'/>
            </div>
            <p className="my-6">Menjadi pilihan pertama dari perusahaan-perusahaan yang membutuhkan SDM.</p>
            <div className='mb-8 inline-block'>
              <Link href='https://www.alfaprima.id/' target='_blank' className='flex items-center hover:underline text-zinc-800 hover:text-zinc-700'>Kunjungi alfaprima.id <FaArrowRight className='h-4 w-4 ms-2'/></Link>
            </div>
            <div className='py-6 border-t border-zinc-200'>
              <p className="text-sm sm:text-center text-gray-500">© {new Date().getFullYear()} <Link href='/' className="hover:underline">Alfa Prima</Link>. All Rights Reserved.</p>
            </div>
          </div>
        </footer>
    </div>
  )
}

{/* <p className='mb-4'>Acara ini akan diisi dengan berbagai kegiatan menarik seperti :</p>
<ul className='mb-8 ps-8 list-disc'>
  <li>Sesi Sambutan dan Pembukaan</li>
  <li>Makan Malam dan Hiburan</li>
  <li>Sesi Berbagi Kenangan dan Pengalaman</li>
  <li>Presentasi dari Alumni Berprestasi</li>
  <li>Diskusi dan Networking</li>
</ul> */}

export default page