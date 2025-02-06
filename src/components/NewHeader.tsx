


"use client";
import Link from "next/link";
import React, { useState } from "react";
import { IoIosArrowForward } from "react-icons/io";
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import Image from "next/image";
import { UserButton } from "@clerk/nextjs";

function NewHeader() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <>
      {/* Top Section */}
      <div className="bg-[#23856D] h-[58px] w-full">
        <div className="flex flex-col sm:flex-row justify-between items-center w-full h-full px-4 sm:px-6 lg:px-8 gap-2 sm:gap-0">
          {/* Left Section: Contact Info */}
          <div className="flex flex-wrap gap-2 sm:gap-4 items-center">
            <button className="flex items-center gap-2 text-white">
              <Image src="/phone.png" alt="phone" width={16} height={16} />
              <span className="text-xs sm:text-sm font-semibold">
                (225) 555-0118
              </span>
            </button>
            <button className="flex items-center gap-2 text-white">
              <Image src="/email.png" alt="mail" width={16} height={16} />
              <span className="text-xs sm:text-sm">
                michelle.rivera@example.com
              </span>
            </button>
          </div>

          {/* Center Section: Follow Us */}
          <h6 className="hidden md:block text-xs sm:text-sm font-semibold text-white text-center">
            Follow Us and get a chance to win 80% off
          </h6>

          {/* Right Section: Social Icons */}
          <div className="flex items-center gap-2 sm:gap-4">
            <h6 className="text-xs sm:text-sm text-white">Follow Us:</h6>
            <div className="flex gap-3">
              <FaInstagram className="text-white text-sm sm:text-base" />
              <FaYoutube className="text-white text-sm sm:text-base" />
              <FaFacebookF className="text-white text-sm sm:text-base" />
              <FaTwitter className="text-white text-sm sm:text-base" />
            </div>
          </div>
        </div>
      </div>

      {/* Navbar Section */}
      <div className="relative w-full h-[92px] flex items-center justify-between px-4 sm:px-6 lg:px-8 bg-slate-50">
        {/* Logo */}
        <h2 className="text-base sm:text-lg lg:text-2xl font-bold text-[#252B42]">
          Shop
        </h2>

        {/* Toggle Button for Mobile */}
        <button
          className="block lg:hidden text-gray-600"
          onClick={toggleSidebar}
        >
          {sidebarOpen ? "" : ""}
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          
        </button>

        {/* Desktop Menu */}
        <div className="hidden lg:flex gap-6 xl:gap-8 items-center">
          <Link href="/">
            <h6 className="text-sm font-semibold text-[#252B42]">Home</h6>
          </Link>
          <IoIosArrowForward className="text-gray-500" />
          <Link href="/shops">
            <h6 className="text-sm font-semibold text-[#BDBDBD]">Shop</h6>
          </Link>
        </div>
      </div>

      {/* Sidebar Menu for Mobile */}
      {sidebarOpen && (
        <div className="fixed top-0 left-0 w-[250px] h-[100vh] bg-white shadow-lg z-50 lg:hidden">
          <button
            className="absolute top-4 right-4 text-gray-600"
            onClick={toggleSidebar}
          >
            Close
          </button>
          <nav className="flex flex-col p-6 gap-4">
            <Link href="/">
              <h6 className="text-lg font-semibold text-[#252B42]">Home</h6>
            </Link>
            <Link href="/shops">
              <h6 className="text-lg font-semibold text-[#BDBDBD]">Shop</h6>
            </Link>
            <UserButton />
          </nav>
        </div>
      )}
    </>
  );
}

export default NewHeader