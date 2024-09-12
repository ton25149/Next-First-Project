"use client";
import React from "react";
import { MdOutlineGetApp } from "react-icons/md";
import { BsArrowDownRightSquare } from "react-icons/bs";

import logo1 from "../logos/discord.png"
import logo2 from "../logos/line.png"
import logo3 from "../logos/facebook.png"


const Data = [
  {
    id :1,
    image : logo1,  
    title:"Mobile App",
    desc : "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Harum hivoluptatibus itaque odit quas accusamus. Accusamus corporisexcepturi laudantium reiciendis? " ,
  },
  {
id :2,
image :logo2,
title : "Mobile App",
desc : "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Harum hivoluptatibus itaque odit quas accusamus. Accusamus corporisexcepturi laudantium reiciendis?"
  },
  {
    id :3,
    image : logo3,  
    title:"Mobile App",
    desc : "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Harum hivoluptatibus itaque odit quas accusamus. Accusamus corporisexcepturi laudantium reiciendis? " ,
  },
]


function about() {
  return (
    <div className="items-center justify-center  w-screen custom-img2  bg-center bg-no-repeat bg-fixed flex relative object-cover py-10 h-screen">
    <div className="flex justify-center py-40">
      <div className="jobContainer flex gap-10 justify-center flex-wrap items-center py-10 ">
        {
        Data.map (({id,image,title,desc}) => {
          return (
            <div key={id} className="group group/item singleJob w-[250px] p-[20px]  rounded-[10px] hover:bg-gray-500/20 shadow-lg hover:shadow-lg hover:text-white ">
              
          <span className="flex justify-between items-center gap-4 ">
          <img src={image.src} alt="" className="w-[25%] flex items-center m-2"/>
            <span className="flex items-center text-black gap-1 group-hover:text-white hover:scale-125 duration-150 cursor-pointer">
            <BsArrowDownRightSquare />
              Detail
            </span>
          </span>

          <h6 className="text-black group-hover:text-white">{title}</h6>

          <p className="text-[13px] mt-[20px] p-[20px] text-blac gap-2 group-hover:text-white border-t-[2px]">
           {desc}
          </p>

          <button className="rounded-[10px] border-[2px] block p-[10px] w-full text-[14px] font-semibold hover:bg-white hover:text-black bg-slate-600">
            Download
          </button>
        </div>
          )
        })}
      </div>
    </div>
    </div>
  );
}

export default about;
