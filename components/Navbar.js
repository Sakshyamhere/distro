import React, { useEffect } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { RiCloseFill } from "react-icons/ri";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";

function Navbar() {
  const router = useRouter();
  const [navbar, setNavbar] = useState(false);
  const [value, setValue] = useState([]);


  
  const handleChange = (e) => {
    setValue(e.target.value.toLowerCase());
    console.log(value);
  };
  const handleSearch = (e) => {
    e.preventDefault();
    router.push(`/distro/${encodeURIComponent(value)}`,undefined, { shallow: true });
  };

  return (
    <div>
      <nav className="mb-10 mx-auto shadow-md">
        <div className="justify-between px-4 mx-auto md:items-center md:mx-10 lg:mx-20 md:flex">
          <div>
            <div className="flex items-center justify-between py-3 md:py-5 md:block">
              {/* LOGO */}

              <Link href="/" className="flex items-center">
                <Image src="./logo.svg" height={40} width={40} alt="logo" />
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold">DistroHub</h2>
              </Link>

              {/* HAMBURGER BUTTON FOR MOBILE */}
              <div className="md:hidden">
                <button
                  className="p-2 rounded-md outline-none focus:border-gray-400 focus:border"
                  onClick={() => setNavbar(!navbar)}
                >
                  {navbar ? (
                    <RiCloseFill className="text-3xl" />
                  ) : (
                    <GiHamburgerMenu className="text-3xl" />
                  )}
                </button>
              </div>
            </div>
          </div>
          <div>
            <div
              className={`flex-1 justify-self-center md:block md:pb-0 md:mt-0  ${
                navbar ? "md:p-0 block" : "hidden"
              }`}
            >
              <ul className="flex  sm:flex-col  md:h-auto items-center justify-center md:flex md:flex-row ">
                <li className="mx-auto my-3 md:mx-2 lg:mx-4 text-xl md:text-2xl font-medium">
                  <Link href="/distros" onClick={() => setNavbar(!navbar)}>
                    Distros
                  </Link>
                </li>
                <li className="mx-auto my-3 md:mx-2 lg:mx-4 text-xl md:text-2xl font-medium">
                  <Link href="/wms" onClick={() => setNavbar(!navbar)}>
                    WMs
                  </Link>
                </li>
                <li className="mx-auto my-3 md:mx-2 lg:mx-4 text-xl md:text-2xl font-medium">
                  <Link href="/why" onClick={() => setNavbar(!navbar)}>
                    Why?
                  </Link>
                </li>
                <li className="mx-auto my-3 md:mx-2 lg:mx-4 text-xl md:text-2xl font-medium">
                  <Link href="/linux" onClick={() => setNavbar(!navbar)}>
                    Linux
                  </Link>
                </li>
                <li className="mx-auto my-3 md:mx-2 lg:mx-4 text-xl md:text-2xl font-medium">
                  <Link href="/home" onClick={() => setNavbar(!navbar)}>
                    About
                  </Link>
                </li>
                <li>
                  <div className="relative">
                    <form role="search" onSubmit={handleSearch}>
                      <input
                        type="search"
                        id="default-search"
                        className="block w-full p-2 border-2 border-gray-500  bg-[#343333] text-white text-sm rounded-lg "
                        placeholder="Search....."
                        onChange={handleChange}
                        required
                      />
                    </form>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
