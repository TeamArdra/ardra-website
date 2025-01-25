import React from "react";
import { Montserrat } from "next/font/google";
import Image from "next/image";

const montserrat = Montserrat({ subsets: ["latin"], weight: ["700", "900"] });

const TeamArdra: React.FC = () => {
  return (
    <div>
      {/* Image Section */}
      <div className="mt-16 w-full group relative">
        {/* Default Image */}
        <Image
          src="/drone-img1.png" // Replace with the actual image path
          alt="Default Image" // Replace with appropriate alt text
          layout="responsive"
          width={8426}
          height={2544}
          className="block group-hover:hidden" // Hide this image on hover
        />
        {/* Hover Image */}
        <Image
          src="/drone-img1.png" // Replace with the hover image path
          alt="Hover Image" // Replace with appropriate alt text
          layout="responsive"
          width={8426}
          height={2544}
          className="hidden group-hover:block" // Show this image on hover
        />
      </div>
      <div className="flex items-center flex-wrap lg:flex-nowrap">
      {/* Header Section */}
      <div className="{montserrat.className} text-center lg:text-left">
        <h1 className="text-[12vh] font-black italic lg:text-[23vh]">
          <span
            className="text-white"
            style={{
              WebkitTextStroke: "2px #3B82F6", // Tailwind color for blue-500
              WebkitTextFillColor: "white",
            }}
          >
            TEAM&nbsp;
          </span>
          <span className="text-blue-500 italic">ARDRA</span>
        </h1>
      </div>
        

        {/* Full-Height Image */}
        <div className="hidden md:flex flex-grow h-[40vh] md:h-[25vh] relative">
          <Image
            src="/sideimg.png" // Replace with the actual image path
            alt="Next to text image" // Replace with appropriate alt text
            layout="fill" // Makes the image take up the entire container
            objectFit="contain" // Ensures the image scales proportionally
          />
        </div>
      </div>
    </div>
  );
};

export default TeamArdra;
