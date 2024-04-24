"use client";
import Link from "next/link";
import React from "react";

function Header() {
  return (
    <nav className="fixed font-bold top-0 left-0 w-full z-10 text-xl bg-gray-500 shadow-lg bg-opacity-40">
      <div className="flex justify-between items-center max-w-[1240] m-auto p-4 " >
      <Link href='/' className="text-white  rounded-lg p-2 hover:shadow-2xl focus:ring focus:ring-white focus:outline-none active:bg-gray-400 ml-20 hover:scale-125 duration-150">Home</Link>
      
      
      <ul className="flex space-x-4 mr-10 text-xl bg-opacity-95">
      <Link href='/abouts' className=" text-white rounded-lg p-2 hover:shadow-2xl focus:ring focus:ring-white focus:outline-none active:bg-stone-300 hover:scale-125 duration-150">About</Link>
      <Link href='/' className=" text-white rounded-lg p-2 hover:shadow-2xl focus:ring focus:ring-white focus:outline-none active:bg-stone-300 hover:scale-125 duration-150">Services</Link>
      <Link href='/' className="text-white rounded-lg p-2 hover:shadow-2xl focus:ring focus:ring-white focus:outline-none active:bg-stone-300 hover:scale-125 duration-150">Contact</Link>
      <Link href='/' className="text-white rounded-lg p-2 hover:shadow-2xl focus:ring focus:ring-white focus:outline-none active:bg-stone-300 hover:scale-125 duration-150">Sign in</Link>

      </ul>
      
      </div>
    </nav>
    
  );
}

export default Header;
