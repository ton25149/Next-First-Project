"use client";

import React from "react";
import { MdOutlineGetApp } from "react-icons/md";
import { BsArrowDownRightSquare } from "react-icons/bs";

import logo1 from "../logos/discord.png"
import logo2 from "../logos/line.png"
import logo3 from "../logos/facebook.png"
import { FaAngleRight } from "react-icons/fa6"; 



const Data = [
  {
    id :1,
    image : "https://images.pexels.com/photos/7005491/pexels-photo-7005491.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" ,  
    title:"Mobile App",
    desc : "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Harum hivoluptatibus itaque odit quas accusamus. Accusamus corporisexcepturi laudantium reiciendis? " ,
  },
  {
id :2,
image :"https://images.pexels.com/photos/1087735/pexels-photo-1087735.jpeg?auto=compress&cs=tinysrgb&w=1200",
title : "Mobile App",
desc : "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Harum hivoluptatibus itaque odit quas accusamus. Accusamus corporisexcepturi laudantium reiciendis?"
  },
  {
    id :3,
    image : "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1200",  
    title:"Mobile App",
    desc : "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Harum hivoluptatibus itaque odit quas accusamus. Accusamus corporisexcepturi laudantium reiciendis? " ,
  },
  {
    id :4,
    image : "https://images.pexels.com/photos/7005491/pexels-photo-7005491.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" ,  
    title:"Mobile App",
    desc : "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Harum hivoluptatibus itaque odit quas accusamus. Accusamus corporisexcepturi laudantium reiciendis? " ,
  },
  {
id :5,
image :"https://images.pexels.com/photos/1087735/pexels-photo-1087735.jpeg?auto=compress&cs=tinysrgb&w=1200",
title : "Mobile App",
desc : "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Harum hivoluptatibus itaque odit quas accusamus. Accusamus corporisexcepturi laudantium reiciendis?"
  },
  {
    id :6,
    image : "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1200",  
    title:"Mobile App",
    desc : "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Harum hivoluptatibus itaque odit quas accusamus. Accusamus corporisexcepturi laudantium reiciendis? " ,
  },
]


function news() {
  return (
    
    <div className="items-center justify-center  relative pb-10 mt-5">
     
      <div className="absolute mt-5">
              <a
                href="/"
                className="justify-start absolute flex ml-40 text-slate-400 hover:text-custom-blue"
              >
                Home
              </a>
              <FaAngleRight className="absolute mt-[5px] ml-[210px]" />
              <p className="justify-start absolute ml-[235px]">News</p>

              
            </div>

            <div className="flex justify-items-center pt-[80px] pl-[157px]">
              <h1 className="text-bold text-[50px]">News</h1>

              <div className="flex items-center space-x-4 text-gray-600 pl-7 pt-2">
  <span className="font-bold hover:text-custom-blue cursor-pointer focus:text-custom-blue">Thai</span>
  <span className="h-4 w-[1px] bg-gray-400"></span>
  <span className="font-bold hover:text-custom-blue cursor-pointer focus:text-custom-blue">English</span>
</div>


            </div>
    <div className=" justify-center">
    

      <div className="jobContainer flex gap-10 justify-center flex-wrap items-center pt-[100px]">
        {
        Data.map ( ({id,image,title,desc}) => {
          return (
            <article key={id}
                className="w-[400px] h-[500px] shadow-lg flex flex-col">
                  {/* ปรับขนาดของ div สำหรับรูปภาพ */}
                  <div className="overflow-hidden rounded-t-[10px]">
                    <img
                      src={image}
                      alt=""
                      className="w-full h-[200px] object-cover transition-transform hover:scale-110 duration-200 cursor-pointer"
                    />
                  </div>

                  {/* ส่วนของเนื้อหา */}
                  <div className="p-5 flex flex-col flex-grow">
                    <h2
                      className="text-[21px] max-w-[290px] max-h-[100px] font-bold pt-5 
  line-clamp-2 overflow-hidden "
                    >
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti, ex.
                    </h2>
                    <p
                      className="text-[14px] text-custom-grey mt-[20px] p-[20px] gap-2 
  border-t-[2px] flex-grow line-clamp-3 overflow-hidden"
                    >
                      {desc}
                    </p>
                    <p className="bottom-0 left-0 pt-5">24 May 2024</p>
                  </div>
                </article>
      
          )
        })}
      </div>
    </div>
    </div>
  );
}

export default news;
