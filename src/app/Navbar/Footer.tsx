'use client'
import React from "react";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="relative bottom-0  left-0 w-full z-1  bg-opacity-40 bg-slate-300">
      <div className="flex justify-between items-center max-w-[1240] m-auto p-2 ">
      <a href="" className="text-black flex ml-10 font-bold">
        No Copyright
      </a>
      <p className="absolute text-[12px] w-1/4 left-[170px] top-8">Lorem ipsum dolor sit amet consectetur adipisicing
      Lorem ipsum dolor adipisicing elit.</p>
      <ul className="flex p-4 space-x-4 mr-0 ">
        <p className="font-semibold text-[13px] relative top-2">Follow My Website</p>
        <a href="https://www.facebook.com/cia.iris" className="hover:scale-125 duration-150">
        <FaFacebook className="size-10 text-blue-400 hover:text-blue-400" />
        </a>  
        <a href="https://www.instagram.com/webbb.pj/?next=%2F&hl=th" className="hover:scale-125 duration-150">
        <FaInstagram className="size-10 text-pink-500 hover:text-pink-500" />
        </a>
        <a href="" className="hover:scale-110 duration-150">
        <FaTwitter className="size-10 text-blue-400 hover:text-blue-400"/>
        </a>
      </ul>
    </div>
    </footer>
  );
}
