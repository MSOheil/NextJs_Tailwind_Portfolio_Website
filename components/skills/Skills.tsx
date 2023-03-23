import Image from "next/image";
import React from "react";
import skillImageOne from "../../public/assets/skills/html.png";
import skillImageTwo from "../../public/assets/skills/css.png";
import skillImageThree from "../../public/assets/skills/javascript.png";
import skillImageFour from "../../public/assets/skills/react.png";
import skillImageFive from "../../public/assets/skills/tailwind.png";
import skillImageSix from "../../public/assets/skills/firebase.png";
import skillImageSeven from "../../public/assets/skills/github1.png";
import skillImageEaight from "../../public/assets/skills/shopify.png";
export default function cmp_skills() {
  return (
    <div className="p-2 w-full lg:h-screen">
      <div className="max-w-[1240px] mx-auto flex flex-col justify-center h-full">
        <p className="uppercase text-xl tracking-widest text-[#5651e5]">
          Skills
        </p>
        <h2 className="py-4">What I Can Do</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-between items-center">
              <div className="m-auto">
                <Image
                  alt="/"
                  src={skillImageOne}
                  width="64"
                  height="64"
                ></Image>
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3 className="text-xl">HTML</h3>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-between items-center">
              <div className="m-auto">
                <Image
                  alt="/"
                  src={skillImageTwo}
                  width="64"
                  height="64"
                ></Image>
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3 className="text-xl">Css</h3>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-between items-center">
              <div className="m-auto">
                <Image
                  alt="/"
                  src={skillImageThree}
                  width="64"
                  height="64"
                ></Image>
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3 className="text-xl">Java Script</h3>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-between items-center">
              <div className="m-auto">
                <Image
                  alt="/"
                  src={skillImageFour}
                  width="64"
                  height="64"
                ></Image>
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3 className="text-xl">React</h3>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-between items-center">
              <div className="m-auto">
                <Image
                  alt="/"
                  src={skillImageFive}
                  width="64"
                  height="64"
                ></Image>
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3 className="text-xl">Tailwind</h3>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-between items-center">
              <div className="m-auto">
                <Image
                  alt="/"
                  src={skillImageSix}
                  width="64"
                  height="64"
                ></Image>
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3 className="text-xl">FierBase</h3>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-between items-center">
              <div className="m-auto">
                <Image
                  alt="/"
                  src={skillImageSeven}
                  width="64"
                  height="64"
                ></Image>
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3 className="text-xl">Github</h3>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-between items-center">
              <div className="m-auto">
                <Image
                  alt="/"
                  src={skillImageEaight}
                  width="64"
                  height="64"
                ></Image>
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3 className="text-xl">Shopyfy</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
