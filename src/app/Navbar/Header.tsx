"use client";
import Link from "next/link";
import React from "react";
import { GrLanguage } from "react-icons/gr";
import { IoMdArrowDropdown } from "react-icons/io";


function Header() {
  return (
    <nav className="fixed font-bold top-0 w-full z-10 text-xl shadow-lg bg-white relative">
      <div className="flex items-center max-w-[1240] p-4 ">
        <Link
          href="/"
          className="text-black rounded-lg p-2 hover:shadow-2xl focus:underline active:bg-gray-400 ml-20 hover:scale-125 duration-150"
        >
          Home
        </Link>

        <ul className="flex space-x-8  text-xl bg-opacity-95 m-auto">
          <Link
            href="/services"
            className=" text-black rounded-lg p-2 hover:shadow-2xl  focus:underline active:bg-stone-300 duration-150 hover:scale-125"
          >
            Services
          </Link>
          <Link
            href="/abouts"
            className=" text-black rounded-lg p-2 hover:shadow-2xl  focus:underline focus:outline-none active:bg-stone-300 hover:scale-125 duration-150"
          >
            Abouts
          </Link>
          <Link
            href="/contacts"
            className="text-black rounded-lg p-2 hover:shadow-2xl focus:underline active:bg-stone-300 hover:scale-125 duration-150"
          >
            Contact
          </Link>
          <Link
            href="/signin"
            className="text-black rounded-lg p-2 hover:shadow-2xl focus:underline active:bg-stone-300 hover:scale-125 duration-150"
          >
            Sign in
          </Link>
        </ul>

        <ul
          id="dropdownButton"
          className=" text-black mr-5 text-xl"

onClick={() => {
            
  const dropdown = document.getElementById("menu-dropdown");//+
  if (dropdown) {
    dropdown.classList.toggle("hidden");
  }
}}

        >
          <div className="flex m-auto space-x-2 rounded-lg p-2 cursor-pointer">
            <GrLanguage />
            <p className="relative bottom-1">EN</p>
            <IoMdArrowDropdown />

            <div
              id="menu-dropdown"
              className="bg-white absolute text-black top-14 w-16 text-center border-spacing-1 right-10 text-base hidden"
            >
              <div className="hover:bg-gray-300 duration-150">
                <a href="/" >
                  ENG
                </a>
              </div>
              <div className="hover:bg-gray-300 duration-150">
                <Link href="/lang">TH</Link>
                
              </div>
            </div>
          </div>
        </ul>
      </div>
    </nav>
  );
}

export default Header;
