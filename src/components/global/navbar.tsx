"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import Image from "next/image";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white text-blue-600 shadow-md fixed w-full top-0 left-0 z-50">
      <div className="container mx-auto flex justify-between items-center px-4 py-3">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Link href="/">
            <Image
              src="/ardra-logo.png"
              alt="Company Logo"
              width={50}
              height={40}
              className="cursor-pointer"
            />
          </Link>
        </motion.div>
        <div className="md:hidden">
          <button onClick={toggleMenu} className="focus:outline-none">
            {isOpen ? (
              <X className="w-8 h-8 transition-transform duration-300 transform hover:scale-110" />
            ) : (
              <Menu className="w-8 h-8 transition-transform duration-300 transform hover:scale-110" />
            )}
          </button>
        </div>
        <div className={`md:flex md:items-center md:space-x-6 text-lg ${isOpen ? "hidden md:flex" : "hidden"}`}>
          <ul className="flex flex-col md:flex-row md:space-x-6">
            <li>
              <Link href="/our-drones" className="block py-2 px-4 transition-colors duration-300 hover:text-blue-800">
                Our Drones
              </Link>
            </li>
            <li>
              <Link href="/our-team" className="block py-2 px-4 transition-colors duration-300 hover:text-blue-800">
                Our Team
              </Link>
            </li>
            <li>
              <Link href="/our-domains" className="block py-2 px-4 transition-colors duration-300 hover:text-blue-800">
                Our Domains
              </Link>
            </li>
            <li>
              <Link href="/reach-us" className="block py-2 px-4 transition-colors duration-300 hover:text-blue-800">
                Reach Us
              </Link>
            </li>
          </ul>
        </div>
        <AnimatePresence>
          {isOpen && (
            <motion.div
              className="fixed inset-0 bg-white text-blue-600 flex flex-col justify-center items-center z-50"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
            >
              <button
                onClick={toggleMenu}
                className="absolute top-4 right-4 focus:outline-none hover:rotate-90 transition-transform duration-300"
              >
                <X className="w-8 h-8" />
              </button>
              <ul className="flex flex-col space-y-4 text-lg mb-8">
                <li>
                  <Link href="/our-drones" className="block py-2 px-4 transition-colors duration-300 hover:text-blue-800">
                    Our Drones
                  </Link>
                </li>
                <li>
                  <Link href="/our-team" className="block py-2 px-4 transition-colors duration-300 hover:text-blue-800">
                    Our Team
                  </Link>
                </li>
                <li>
                  <Link href="/our-domains" className="block py-2 px-4 transition-colors duration-300 hover:text-blue-800">
                    Our Domains
                  </Link>
                </li>
                <li>
                  <Link href="/reach-us" className="block py-2 px-4 transition-colors duration-300 hover:text-blue-800">
                    Reach Us
                  </Link>
                </li>
              </ul>
              <div className="absolute bottom-8 flex flex-col items-center space-y-4">
                <Image
                  src="/ardra-logo.png"
                  alt="Company Logo"
                  width={100}
                  height={35}
                  className="mx-auto pr-4 space-y-4"
                />
                <p className="text-sm text-gray-500 italic mt-2">Throttling Towards Excellence</p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      <motion.div
        className="h-1 bg-gradient-to-r from-blue-300 to-blue-500"
        layoutId="underline"
      ></motion.div>
    </nav>
  );
};

export default Navbar;
