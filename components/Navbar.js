import React, { useState } from "react";
import { MdHome, MdQuestionMark } from "react-icons/md";
import { FaLinux } from "react-icons/fa";
import { BsReverseLayoutTextWindowReverse, BsSearch } from "react-icons/bs";
import { CgProfile } from "react-icons/cg";
import { GiLightningBranches, GiTreeBranch } from "react-icons/gi";
import Link from "next/link";
import { useRouter } from "next/router";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
function Navbar() {
  const router = useRouter();
  const [search, setsearch] = useState(false);
  const [slug, setSlug] = useState("");
  const handelSearch = () => {
    setsearch(true);
  };
  console.log(slug);
  const distros = [
    { label: "Arch" },
    { label: "CentOs" },
    { label: "Debian" },
    { label: "Fedora" },
    { label: "Linuxmint" },
    { label: "Opensuse" },
    { label: "Redhat" },
    { label: "Ubuntu" },
  ];
  return (
    <>
      <div>
        <nav className="flex  justify-between float-left h-[99vh] flex-col bg-gray-900 w-[7vh] m-1 rounded-xl fixed">
          <ul className="mx-auto">
            <div>
              <li className="my-6 text-3xl">
                <Link href="/">
                  <MdHome title="Home" />
                </Link>
              </li>
              <li className="my-6 text-3xl">
                <Link href="/linux">
                  <FaLinux title="Linux" />
                </Link>
              </li>

              <li className="my-6 text-3xl">
                <Link href="/distros">
                  <GiLightningBranches title="Distros" />
                </Link>
              </li>
              <li className="my-6 text-3xl">
                <Link href="/subdistros">
                  <GiTreeBranch title="Remix" />
                </Link>
              </li>
              <li className="my-6 text-3xl">
                <Link href="/wms">
                  <BsReverseLayoutTextWindowReverse title="Wms" />
                </Link>
              </li>
              <li className="my-6 text-3xl">
                <Link href="/why">
                  <MdQuestionMark title="Why" />
                </Link>
              </li>
              <li className="my-6 text-3xl">
                <Link href="/about">
                  <CgProfile title="About" />
                </Link>
              </li>
            </div>
          </ul>
          <ul className="mx-auto">
            <li className="my-6 text-3xl">
              <button className="pointer" onClick={handelSearch}>
                <BsSearch title="Search" />
              </button>
            </li>
          </ul>
        </nav>
      </div>
      {search && (
        <div className="absolute text-white bg-white bg-opacity-50 h-screen w-screen flex items-center justify-center">
          <div class="lg:w-2/6 md:w-1/2 w-full rounded-lg p-3 mx-10 my-10 bg-gray-900 justify-center flex">
            <div class="relative mb-4">
            <form  onSubmit={(e) => {e.preventDefault()
            setsearch(false)
                  router.push(`/distro/${encodeURIComponent(slug)}`,undefined, { shallow: false })
                  
                  }}>
                     <label for="distro" class="leading-7 text-white  text-lg">
               Distro
              </label>
              <input
                type="text"
                id="distro"
                name="distro"
                class="w-full bg-gray-700 rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-300 px-10 py-2 leading-8 transition-colors duration-200 ease-in-out"
                onChange={(e) => setSlug(e.target.value.toLowerCase().replace(/\s/g,''))}
                />
            </form>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Navbar;
