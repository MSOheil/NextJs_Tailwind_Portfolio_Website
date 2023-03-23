import Image from "next/image";
import Link from "next/link";
import React from "react";
import PropertyImage from "../../public/assets/projects/property.jpg";
import NetfilixImg from "../../public/assets/projects/Netflix.jpg";
import twichImg from "../../public/assets/projects/twitch.jpg";
import cryptoImage from "../../public/assets/projects/crypto.jpg";
import ProjectItems from "./ProjectsItems";

export default function cmp_projects() {
  return (
    <div className="w-full">
      <div className="max-w-[1240px] mx-auto px-2 py-16">
        <p className="text-xl tracking-widest uppercase text-[#5651e5]">
          Projects
        </p>
        <h2 className="py-4">What I've Built</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <ProjectItems
            title="Property Finder"
            backgroundImage={PropertyImage}
            projectUrl="/property"
          />
          <ProjectItems
            title="Crypto App"
            backgroundImage={cryptoImage}
            projectUrl="/property"
          />
          <ProjectItems
            title="Twitch app"
            backgroundImage={twichImg}
            projectUrl="/property"
          />
          <ProjectItems
            title="Netfilx web"
            backgroundImage={NetfilixImg}
            projectUrl="/property"
          />
        </div>
      </div>
    </div>
  );
}
