import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineClose, AiOutlineMail } from "react-icons/ai";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import navbarImage from "../../public/assets/navLogo.png";
import { BsFillPersonLinesFill } from "react-icons/bs";
export default function cmp_home_navbar() {
  const [showNav, setShowNav] = useState(false);

  const handleNave = () => {
    setShowNav(!showNav);
  };
  return (
    <div className="fixed w-full h-20 shadow-xl z-[100]">
      <div className="flex justify-between items-center w-full h-full px-2 2xl:px-16">
        <Image src={navbarImage} alt="/" width="125" height="50" />

        <div>
          <ul className="hidden md:flex">
            <Link href="/">
              <li className="ml-10 text-sm uppercase hover:border-b">Home</li>
            </Link>
            <Link href="/">
              <li className="ml-10 text-sm uppercase hover:border-b">About</li>
            </Link>
            <Link href="/">
              <li className="ml-10 text-sm uppercase hover:border-b">Skills</li>
            </Link>
            <Link href="/">
              <li className="ml-10 text-sm uppercase hover:border-b">
                Project
              </li>
            </Link>
            <Link href="/">
              <li className="ml-10 text-sm uppercase hover:border-b">
                Contact
              </li>
            </Link>
          </ul>
          <div onClick={handleNave} className="md:hidden">
            <AiOutlineMenu size={25} />
          </div>
        </div>
      </div>
      <div
        className={
          showNav ? "fixed left-0 top-0 w-full h-screen bg-black/70 md:hidden" : ""
        }
      >
        <div
          className={
            showNav
              ? "fixed left-0 top-0 w-[75%] sm:w-[45%] h-screen bg-[#ecf0f3] p-10 ease-in duration-500"
              : "fixed left-[-100%] top-0 p-10 ease-in duration-500"
          }
        >
          <div className="flex items-center justify-between w-full">
            <Image src={navbarImage} alt="/" width="87" height="37" />
            <div
              onClick={handleNave}
              className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer"
            >
              <AiOutlineClose />
            </div>
          </div>
          <div className="border-b border-gray-300 my-4">
            <p className="w-[85%] md:w-[90%] py-4">
              Let's build something legendary together
            </p>
          </div>

          <div className="py-4 flex flex-col">
            <ul className="uppercase">
              <Link href="/">
                <li>Home</li>
              </Link>
              <Link href="/">
                <li className="py-4 text-sm">About</li>
              </Link>
              <Link href="/">
                <li className="py-4 text-sm">Skills</li>
              </Link>
              <Link href="/">
                <li className="py-4 text-sm">Project</li>
              </Link>
              <Link href="/">
                <li className="py-4 text-sm">Contact</li>
              </Link>
            </ul>
            <div className="pt-20">
              <p className="uppercase tracking-widest text-[#5651e5] hover:tracking-wide">
                Let's Connect
              </p>
            </div>
            <div className="flex justify-between w-full sm:w-[80%] my-4 items-center">
              <div
                className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105
              ease-in duration-500"
              >
                <FaLinkedinIn />
              </div>
              <div
                className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105
              ease-in duration-500"
              >
                <FaGithub />
              </div>
              <div
                className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105
              ease-in duration-500"
              >
                <AiOutlineMail />
              </div>
              <div
                className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105
              ease-in duration-500"
              >
                <BsFillPersonLinesFill />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
