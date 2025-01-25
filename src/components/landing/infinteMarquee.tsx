import React from 'react';
import Marquee from 'react-fast-marquee';
import { Bebas_Neue } from 'next/font/google';
import Image from 'next/image';

const bebas = Bebas_Neue({
  weight: '400',
  subsets: ['latin'],
});

const MyMarquee = () => {
  return (
    <div className={`${bebas.className} my-4 text-3xl relative`}>
      {/* Blue horizontal rule on top */}
      <hr className="border-t-8 border-blue-500" />

      {/* Central Image */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
  <div className="w-40 h-40 md:w-52 md:h-52">
    <Image
      src="/center-image.png" // Replace with the actual image path
      alt="Central Image"
      width={200} // Use any value here; the container controls the size
      height={200}
      className="w-full h-full object-contain" // Ensures the image scales within the container
    />
  </div>
</div>


      {/* Marquee Text */}
      <Marquee
        className="w-full text-blue-500 font-bold overflow-hidden text-xl sm:text-3xl"
        gradient={false}
        speed={20}
        pauseOnHover
      >
        Bold dreamers, fearless innovators and relentless creators redefining the future of flight with cutting-edge autonomous drones. Driven by a passion
      </Marquee>
      <Marquee
        className="w-full text-blue-500 font-bold overflow-hidden text-xl sm:text-3xl"
        gradient={false}
        speed={20}
        pauseOnHover
      >
        for progress, we merge technology with imagination , crafting machines that soar beyond boundaries and inspire new possibilities. Every rotor spins with purpose,
      </Marquee>
      <Marquee
        className="w-full text-blue-500 font-bold overflow-hidden text-xl sm:text-3xl"
        gradient={false}
        speed={20}
        pauseOnHover
      >
        every circuit pulses with ambition , curiosity , and every line of code fuels our vision of a smarter , limitless tomorrow. Together , we&apos;re not just building drones,
      </Marquee>
      <Marquee
        className="w-full text-blue-500 font-bold overflow-hidden text-xl sm:text-3xl"
        gradient={false}
        speed={20}
        pauseOnHover
      >
        we&apos;re shaping the skies and unlocking the future of innovation. Join us in taking flight, where the only limit is how high we dare to dream.
      </Marquee>

      {/* Blue horizontal rule on bottom */}
      <hr className="border-t-8 border-blue-500" />
    </div>
  );
};

export default MyMarquee;
