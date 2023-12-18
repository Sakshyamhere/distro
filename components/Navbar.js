import React from "react";
import { MdHome, MdQuestionMark } from "react-icons/md";
import { FaLinux } from "react-icons/fa";
import { BsReverseLayoutTextWindowReverse, BsSearch } from "react-icons/bs";
import { CgProfile } from "react-icons/cg";
import { GiLightningBranches } from "react-icons/gi";
import Link from "next/link";
function Navbar() {
  return (
      <div>
        <nav className = 'flex  justify-between float-left h-[99vh] flex-col bg-gray-900 w-[7vh] m-1 rounded-xl fixed'>
          <ul className='mx-auto'>
            <div>
              <li className="my-6 text-3xl">
              <Link href='/'><MdHome /></Link>
              </li>
              <li className="my-6 text-3xl">
              <Link href='/linux'><FaLinux /></Link>
              </li>
              <li className="my-6 text-3xl">
              <Link href='/why'><MdQuestionMark /></Link>
              </li>
              <li className="my-6 text-3xl">
              <Link href='/wms'><BsReverseLayoutTextWindowReverse /></Link>
              </li>
              <li className="my-6 text-3xl">
              <Link href='/about'><CgProfile /></Link>
              </li>
              <li className="my-6 text-3xl">
              <Link href='/distros'><GiLightningBranches /></Link>
              </li>
            </div>
          </ul>
          <ul className='mx-auto'>
            <li className="my-6 text-3xl">
            <BsSearch/>
            </li>
          </ul>
        </nav>
        </div>
  );
}

export default Navbar;
