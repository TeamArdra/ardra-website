import React from "react";
import Image from "next/image";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
  weight: ["400", "700"],
  subsets: ["latin"],
});

const TeamArdra: React.FC = () => {
  return (
    <div className="flex flex-col items-center">
      {/* Top Image - Made Smaller */}
      <div className="w-screen max-h-4xl group relative mt-10 md:mt-4">
        {/* Default Image */}
        <Image
          src="/drone-img1.png" 
          alt="Default Image"
          width={8426}
          height={2544}
          className="block group-hover:hidden w-full h-auto"
        />
        {/* Hover Image */}
        <Image
          src="/drone-img1.png"
          alt="Hover Image"
          width={8426}
          height={2544}
          className="hidden group-hover:block w-full h-auto"
        />
      </div>

      {/* Header Section with Full-Width Side Image */}
      <div className="flex items-center w-full mt-2">
        {/* Text Section */}
        <div className={`${montserrat.className} text-center lg:text-left w-full lg:w-auto`}>
          {/* Desktop Text (Large Screens) */}
          <h1 className="hidden lg:block text-[20vh] font-bold italic leading-none">
            <span
              style={{
                textShadow: `
                  -3px -3px 0 #3B82F6,
                  3px -3px 0 #3B82F6,
                  -3px 3px 0 #3B82F6,
                  3px 3px 0 #3B82F6`,
                color: "white",
                display: "inline-block",
              }}
            >
              TEAM&nbsp;
            </span>
            <span className="text-blue-500 italic">ARDRA</span>
          </h1>
          
          {/* Tablet Text (Medium Screens) */}
          <h1 className="hidden md:block lg:hidden text-[14vh] font-bold italic leading-none">
            <span
              style={{
                textShadow: `
                  -3px -3px 0 #3B82F6,
                  3px -3px 0 #3B82F6,
                  -3px 3px 0 #3B82F6,
                  3px 3px 0 #3B82F6`,
                color: "white",
                display: "inline-block",
              }}
            >
              TEAM&nbsp;
            </span>
            <span className="text-blue-500 italic">ARDRA</span>
          </h1>

          {/* Mobile Text (Small Screens) - Two Lines */}
          <h1 className="md:hidden text-[12vh] font-black italic leading-none text-center">
            <span
              className="text-white block"
              style={{
                textShadow: `
                  -3px -3px 0 #3B82F6,
                  3px -3px 0 #3B82F6,
                  -3px 3px 0 #3B82F6,
                  3px 3px 0 #3B82F6`,
                color: "white",
              }}
            >
              TEAM
            </span>
            <span
              className="text-blue-500 italic font-black block mt-[-2vh]"
            >
              ARDRA
            </span>
          </h1>
        </div>

        {/* Side Image - Full Height, Desktop Only, Extending to Edge */}
        <div className="hidden lg:block h-[20vh] flex-grow">
          <div className="relative h-full w-full">
            <Image
              src="/sideimg.png"
              alt="Next to text image"
              layout="fill"
              objectFit="contain"
              objectPosition="right"
              className="h-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamArdra;