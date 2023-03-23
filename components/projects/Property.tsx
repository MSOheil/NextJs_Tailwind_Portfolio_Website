import Image from "next/image";
import propertyImage from "../../public/assets/projects/property.jpg";

export default function cmp_property() {
  return (
    <div className="w-full">
      <div className="w-screen h-[30vh] lg:h-[40vh] relative">
        <div className="absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/80 z-10">
          <Image src={propertyImage} className="absolute z-1" alt="property" />
          <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
            <h2 className="py-2 text-xl text-[#565e1] tracking-widest ">
              Project
            </h2>
            <h3 className="uppercase">react js / tailwind /fierbase</h3>
          </div>
        </div>
        <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8">
          <div className="col-span-4">
            <p className="uppercase text-[#5651e5]  tracking-widest">Project</p>
            <h2>Owerview</h2>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nobis,
              fuga illo molestiae temporibus voluptatibus, perspiciatis
              reprehenderit delectus quod exercitationem quas ab eveniet dolor
              illum id! Rem sed perspiciatis voluptatem veniam!
            </p>
            <button className="px-8 py-2 mt-4 mr-8">Demo</button>
            <button className="px-8 py-2 mt-4 ">Code</button>
          </div>
        </div>
      </div>
    </div>
  );
}
