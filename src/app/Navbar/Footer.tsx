'use client'
import React from "react";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="fixed font-bold bottom-0  left-0 w-full z-10 bg-gray-500 bg-opacity-40">
      <div className="flex justify-between items-center max-w-[1240] m-auto p-4 ">
      <a href="" className="text-white flex ml-10">
        No Copyright
      </a>
      <ul className="flex p-4 space-x-4 mr-0 ">
        <a href="https://www.facebook.com/cia.iris" className="hover:scale-125 duration-150">
        <FaFacebook className="size-10 text-white hover:text-blue-400" />
        </a>
        
        <a href="https://www.instagram.com/webbb.pj/?next=%2F&hl=th" className="hover:scale-125 duration-150">
        <FaInstagram className="size-10 text-white hover:text-pink-500" />
        </a>
        <a href="" className="hover:scale-110 duration-150">
        <FaTwitter className="size-10 text-white hover:text-blue-400"/>
        </a>
      </ul>
    </div>
    </footer>
  );
}
