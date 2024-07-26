import { Bona_Nova } from "next/font/google";
import Image from "next/image";
import Link from "next/link";

const bona_Nova = Bona_Nova({ 
  subsets: ["latin"],
  weight: ["400","700"]
});

export default function Home() {
  return (
    <main>
      <nav className="bg-zinc-900 text-white border-b border-gray-200">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto px-4 py-2">
          <Link href="/" className="flex items-center space-x-1 rtl:space-x-reverse">
            <Image src="https://dev.alfaprima.id/assets/img/logo/AP-W.png" width={412} height={412} className="h-12 w-12" alt="Alfa Prima Logo" />
            <span className={`${bona_Nova.className} self-center text-2xl whitespace-nowrap`}>ALFA PRIMA</span>
          </Link>
          <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
            <Link href="https://www.alfaprima.id/" target="_blank" className="inline-block text-white bg-blue-700 hover:bg-blue-800 focus:ring-2 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center">Kunjungi alfaprima.id</Link>
            <button data-collapse-toggle="navbar-sticky" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-sticky" aria-expanded="false">
              <span className="sr-only">Open main menu</span>
              <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M1 1h15M1 7h15M1 13h15" />
              </svg>
            </button>
          </div>
          <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
            <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0">
              <li>
                <a href="#" className="block font-light py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500" aria-current="page">Home</a>
              </li>
              <li>
                <a href="#" className="block font-light py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Report Bug</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div className="max-w-screen-xl mx-auto px-4 py-32">
        <div className="grid grid-cols-4 gap-4">
          <div className="max-w-sm rounded-xl">
            <Link href="/">
              <Image className="rounded-lg object-cover object-center" src="https://www.alfaprima.id/api-assets/uploads/DSC_07410_d502c0f9f1.JPG" width={1920} height={1080} alt="thumbnail" />
            </Link>
            <div className="py-5">
              <p className="text-blue-700 font-medium text-sm">Tanggal acara :</p>
              <p className="mb-2 text-zinc-500 text-sm">Selasa, 23 Juli 2024</p>
              <Link href="/">
                <h5 className="mb-2 text-xl font-bold tracking-tight text-zinc-700">Noteworthy technology acquisitions 2021</h5>
              </Link>
              <p className="mb-4 font-normal text-zinc-500">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
              <Link href="/" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-2 focus:outline-none focus:ring-blue-300">
                Buka Undangan
                <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M1 5h12m0 0L9 1m4 4L9 9" />
                </svg>
              </Link>
            </div>
          </div>
          <div className="max-w-sm rounded-xl">
            <Link href="/">
              <Image className="rounded-lg object-cover object-center" src="https://www.alfaprima.id/api-assets/uploads/DSC_07410_d502c0f9f1.JPG" width={1920} height={1080} alt="thumbnail" />
            </Link>
            <div className="py-5">
              <p className="text-blue-700 font-medium text-sm">Tanggal acara :</p>
              <p className="mb-2 text-zinc-500 text-sm">Selasa, 23 Juli 2024</p>
              <Link href="/">
                <h5 className="mb-2 text-xl font-bold tracking-tight text-zinc-700">Noteworthy technology acquisitions 2021</h5>
              </Link>
              <p className="mb-4 font-normal text-zinc-500">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
              <Link href="/" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-2 focus:outline-none focus:ring-blue-300">
                Buka Undangan
                <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M1 5h12m0 0L9 1m4 4L9 9" />
                </svg>
              </Link>
            </div>
          </div>
          <div className="max-w-sm rounded-xl">
            <Link href="/">
              <Image className="rounded-lg object-cover object-center" src="https://www.alfaprima.id/api-assets/uploads/DSC_07410_d502c0f9f1.JPG" width={1920} height={1080} alt="thumbnail" />
            </Link>
            <div className="py-5">
              <p className="text-blue-700 font-medium text-sm">Tanggal acara :</p>
              <p className="mb-2 text-zinc-500 text-sm">Selasa, 23 Juli 2024</p>
              <Link href="/">
                <h5 className="mb-2 text-xl font-bold tracking-tight text-zinc-700">Noteworthy technology acquisitions 2021</h5>
              </Link>
              <p className="mb-4 font-normal text-zinc-500">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
              <Link href="/" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-2 focus:outline-none focus:ring-blue-300">
                Buka Undangan
                <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M1 5h12m0 0L9 1m4 4L9 9" />
                </svg>
              </Link>
            </div>
          </div>
          <div className="max-w-sm rounded-xl">
            <Link href="/">
              <Image className="rounded-lg object-cover object-center" src="https://www.alfaprima.id/api-assets/uploads/DSC_07410_d502c0f9f1.JPG" width={1920} height={1080} alt="thumbnail" />
            </Link>
            <div className="py-5">
              <p className="text-blue-700 font-medium text-sm">Tanggal acara :</p>
              <p className="mb-2 text-zinc-500 text-sm">Selasa, 23 Juli 2024</p>
              <Link href="/">
                <h5 className="mb-2 text-xl font-bold tracking-tight text-zinc-700">Noteworthy technology acquisitions 2021</h5>
              </Link>
              <p className="mb-4 font-normal text-zinc-500">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
              <Link href="/" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-2 focus:outline-none focus:ring-blue-300">
                Buka Undangan
                <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M1 5h12m0 0L9 1m4 4L9 9" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <footer className="p-4 bg-white border-t border-zinc-200 md:p-8 lg:p-10">
        <div className="mx-auto max-w-screen-xl text-center">
          <span className="text-sm text-zinc-500 sm:text-center">© {new Date().getFullYear()} Alfa Prima. All Rights Reserved.</span>
        </div>
      </footer>

    </main>
  );
}
