import React from 'react'
import { GiHamburgerMenu} from "react-icons/gi";
import { RiCloseFill } from "react-icons/ri";
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

function Navbar() {
    const [navbar, setNavbar] = useState(false);
    
  return (
    <div>
      <nav className='mb-10' >
        <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
          <div>
            <div className="flex items-center justify-between py-3 md:py-5 md:block">
                
              {/* LOGO */}
              
              <Link href="/" className='flex items-center'>
                <Image src='./logo.svg' height={40} width={40} alt='logo'/>
                <h2 className="text-2xl font-bold">DistroHub</h2>
              </Link>
              
              {/* HAMBURGER BUTTON FOR MOBILE */}
              <div className="md:hidden">
                <button
                  className="p-2 rounded-md outline-none focus:border-gray-400 focus:border"
                  onClick={() => setNavbar(!navbar)}
                >
                  {navbar ? (
                    <RiCloseFill className='text-3xl'/>
                  ) : (
                    <GiHamburgerMenu  className='text-3xl'/>
                  )}
                </button>
              </div>
            </div>
          </div>
          <div>
            <div
              className={`flex-1 justify-self-center md:block md:pb-0 md:mt-0  ${
                navbar ? 'md:p-0 block' : 'hidden'
              }`}
            >
              <ul className="flex flex-row  md:h-auto items-center justify-center md:flex ">
              
                <li className="mx-auto my-3 md:mx-3 text-xl font-medium">
                  <Link href="/distros" onClick={() => setNavbar(!navbar)}>
                    Distros
                  </Link>
                </li>  
                <li className="mx-auto my-3 md:mx-3 text-xl font-medium">
                  <Link href="/wms" onClick={() => setNavbar(!navbar)}>
                    WMs
                  </Link>
                </li>
                <li className="mx-auto my-3 md:mx-3 text-xl font-medium">
                  <Link href="/why" onClick={() => setNavbar(!navbar)}>
                   Why?
                  </Link>
                </li>
                <li className="mx-auto my-3 md:mx-3 text-xl font-medium">
                  <Link href="/linux" onClick={() => setNavbar(!navbar)}>
                   Linux
                  </Link>
                </li>
                <li className="mx-auto my-3 md:mx-3 text-xl font-medium">
                  <Link href="/home" onClick={() => setNavbar(!navbar)}>
                    About
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>

    </div>
  )
}

export default Navbar