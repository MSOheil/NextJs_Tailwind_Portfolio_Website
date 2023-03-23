import React from "react";
import { AiOutlineMail } from "react-icons/ai";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

export default function cmp_main() {
  return (
    <div className="w-full h-screen text-center">
      <div className="max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center ">
        <div>
          <p className="uppercase text-sm tracking-widest text-gray-600 sm:mt-10">
            Let's build somthing together
          </p>
          <h1 className="py-6 text-gray-700">
            Hi, I'm <span className="text-[#5651e5]">Client</span>
          </h1>
          <h1 className="py-2 text-gray-700 uppercase">
            a front-end web developer
          </h1>
          <p className="py-4 text-gray-400 max-w-[70%] m-auto">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam
            quidem nesciunt ea numquam velit quae voluptas harum ipsa expedita
            at commodi dolorem, illum ex mollitia voluptatibus! Dolores alias
            enim autem!
          </p>
          <div className="flex justify-between items-center max-w-[330px] m-auto py-4">
            <div
              className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-105
              ease-in duration-500"
            >
              <FaLinkedinIn />
            </div>
            <div
              className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-105
              ease-in duration-500"
            >
              <FaGithub />
            </div>
            <div
              className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-105
              ease-in duration-500"
            >
              <AiOutlineMail />
            </div>
            <div
              className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-105
              ease-in duration-500"
            >
              <BsFillPersonLinesFill />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
