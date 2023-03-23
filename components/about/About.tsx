import React from "react";
export default function cmp_about() {
  return (
    <div className="w-full md:h-screen p-2 flex items-center py-16">
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
        <div className="col-span-2">
          <p className="text-xl tracking-widest text-[#5651e5] uppercase">
            About
          </p>
          <h2 className="py-4">Who I am</h2>
          <p className="py-2 text-gray-400">I'm not your normal developer</p>
          <p className="py-2 text-gray-400">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum saepe
            corrupti eaque enim doloribus praesentium error dicta accusantium
            officiis, minima, commodi voluptas facere provident corporis
            voluptatibus recusandae cumque esse suscipit!
          </p>

          <p className="py-2 text-gray-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt
            cumque assumenda laborum corrupti possimus dolores reprehenderit eum
            omnis voluptas vero quidem incidunt ipsa, facilis fugiat? Vel maxime
            soluta quaerat vero!
          </p>
          <p>Check out some of my latest projects.</p>
        </div>
        <div
          className="w-full m-auto h-auto shadow-xl object-cover
    shadow-gray-400 rounded-xl flex items-center
        justify-center
        p-4
        hover:scale-105 ease-in duration-300"
        >
          <img className="rounded-xl "
            src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}
