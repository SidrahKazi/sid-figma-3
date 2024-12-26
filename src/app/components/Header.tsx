import Link from 'next/link';
import Image from 'next/image';
import { BsSuitHeart } from "react-icons/bs";
import { PiSuitcaseSimple } from "react-icons/pi";

export default function Header() {
    return (
        <header className="bg-white text-black p-4">
            <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
                {/* Logo */}
                <div className="flex justify-between items-center w-full md:w-auto mb-4 md:mb-0">
                    <img 
                        src="/Frame (1).png" 
                        alt="Logo" 
                        className="h-12 w-auto"
                    />
                    <button className="md:hidden text-black focus:outline-none">
                        {/* This could be an icon for mobile menu toggle */}
                    </button>
                </div>

                {/* Links */}
                <nav className="flex flex-col font-semibold md:flex-row items-center w-full md:w-auto space-y-4 md:space-y-0 md:space-x-8">
                    <Link className="hover:text-gray-400" href="/">New & Featured</Link>
                    <Link className="hover:text-gray-400" href="/">Men</Link>
                    <Link className="hover:text-gray-400" href="/">Women</Link>
                    <Link className="hover:text-gray-400" href="/">Kids</Link>
                    <Link className="hover:text-gray-400" href="/">Sale</Link>
                    <Link className="hover:text-gray-400" href="/">SNKRS</Link>
                    
                    <form className="w-full md:max-w-md mx-auto flex items-center space-x-4">   
                        <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only">Search</label>
                        <div className="relative flex-1">
                            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                <svg className="w-4 h-4 text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                                </svg>
                            </div>
                            <input type="search" id="default-search" className="block w-full p-2 pl-10 text-sm bg-gray-50 rounded-md focus:ring-blue-500 focus:border-blue-500" placeholder="Search" required />
                        </div>
                    </form>

                    <div className="flex space-x-4">
                        <BsSuitHeart size={25} />
                     <Link href='/AddToCart'>  <PiSuitcaseSimple size={25} />  </Link>
                    </div>
                </nav>
            </div>
        </header>
    );
}
