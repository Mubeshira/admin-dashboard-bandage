


"use client"
import Link from 'next/link';
import React, { useState } from 'react';
import { Button } from './ui/button';

function Header2() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <>
      <div className='w-full bg-[#FFFFFF] flex justify-between px-4 sm:px-6 md:px-8 lg:px-[59px] items-center mt-4 h-[91px]'>
        {/* left */}
        <div className='flex items-center'>
          <h2 className='font-Montserrat font-semibold text-xl md:text-2xl'>Bandage</h2>
        </div>

        {/* toggle button for mobile */}
        <div className='lg:hidden'>
          <button
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            className='text-gray-600 focus:outline-none'
          >
            {isSidebarOpen ? '✖' : '☰'}
          </button>
        </div>

        {/* right */}
        <div className='hidden lg:flex w-auto h-[58px] justify-between ml-10'>
          {/* inner left */}
          <ul className='flex gap-4 xl:gap-[21px] text-[14px] text-gray-600 items-center'>
            <li><Link href="/">Home</Link></li>
            <li><Link href="/shops">Product</Link></li>
            <li><Link href="/pricing">Pricing</Link></li>
            <li><Link href="/contact">Contact</Link></li>
          </ul>

          {/* inner right */}
          <div className='flex gap-4 ml-8'>
            <Button className='bg-white text-blue-500 px-4 py-2'>Login</Button>
            <div className='bg-blue-500 flex items-center justify-center px-4 py-2'>
              <h3 className='text-[#FFFFFF] text-[14px]'>Become a Member</h3>
            </div>
          </div>
        </div>
      </div>

      {/* Sidebar for mobile */}
      {isSidebarOpen && (
        <div className='lg:hidden bg-[#FFFFFF] absolute top-[91px] left-0 w-full h-screen z-10 shadow-lg'>
          <ul className='flex flex-col gap-4 text-[14px] text-gray-600 p-4'>
            <li><Link href="/">Home</Link></li>
            <li><Link href="/shops">Product</Link></li>
            <li><Link href="/pricing">Pricing</Link></li>
            <li><Link href="/contact">Contact</Link></li>
          </ul>
          <div className='flex flex-col gap-4 p-4'>
            <Button className='bg-white text-blue-500 w-full'>Login</Button>
            <div className='bg-blue-500 flex items-center justify-center px-4 py-2'>
              <h3 className='text-[#FFFFFF] text-[14px]'>Become a Member</h3>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Header2;
