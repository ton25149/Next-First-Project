"use client";

import React from "react";
import { BsArrowDownRightSquare } from "react-icons/bs";
import logo1 from "../logos/discord.png"
import logo2 from "../logos/line.png"
export default function HomeContent() {
  return (
    
<div>
      <section className="scroll-smooth py-[76px]">
        <div className="video-container "><video
          src="https://videos.pexels.com/video-files/4391550/4391550-uhd_2560_1440_25fps.mp4"
          autoPlay loop
          className="absolute-video hover:transform scale-100"
        ></video>

        </div>
      <div className="justify-center items-center w-full py-60 gap-5 px-5 flex relative overflow-hidden">
        <div className="border-white bg-gray-500/20 shadow-2xl w-4/6 h-auto ">
          <div className="text-2xl  text-white font-content text-start p-8">
            <h1 className="font-extrabold ">Content</h1>
            <p className="flex justify-center text-lg ">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
              suscipit, nobis voluptas veritatis inventore at eos. Quidem neque
              tenetur quisquam nemo facilis labore blanditiis, sed dolorem,
              reprehenderit nulla quia a numquam!
            </p>

            <h1 className="font-extrabold">Content</h1>
            <p className="flex justify-center text-lg mb-5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
              suscipit, nobis voluptas veritatis inventore at eos. Quidem neque
              tenetur quisquam nemo facilis labore blanditiis, sed dolorem,
              reprehenderit nulla quia a numquam!
            </p>
            <button className="px-3 py-2 text-[16px] text-black bg-stone-400  mx-5 shadow-2xl rounded-full hover:scale-110 duration-150">
            Learn More
          </button>
          </div>

          
        </div>
        </div>
      </section>
      <br />
        

      <section className="py-20">
    <div className=" items-center  w-screen custom-img3  bg-center flex relative object-cover py-10 ">
    <img src={logo1.src} alt="" className="discord-img absolute ml-[40px] w-[550px] " />
        
        <div className="pl-[350px]  w-full py-40 gap-20 flex relative overflow-hidden">
          <div className="border-white bg-gray-400/20 shadow-2xl w-[500px] h-auto p-5">
            <div className="text-2xl  text-black font-content text-start p-10">
              <h1 className="font-extrabold">Content</h1>
              <p className="flex justify-center text-lg">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
                suscipit, nobis voluptas veritatis inventore at eos. Quidem
                neque tenetur quisquam nemo facilis labore blanditiis, sed
                dolorem, reprehenderit nulla quia a numquam!
              </p>
            </div>
            <button className="px-5 flex py-4 gap-2 bg-stone-200  mx-5 mb-5 shadow-2xl rounded-sm hover:scale-110 duration-150 text-[16px]">
            <BsArrowDownRightSquare className="mt-1 text-[18px] font-bold " /> Learn More
              </button>
          </div>
          <div>
            
          </div>
        </div>
      </div>
      </section>


      <section className="py-20">
    <div className=" items-center  w-screen custom-img2  bg-center flex relative object-cover py-10 ">
      
        <img src={logo2.src} alt="" className="line-img w-[400px] absolute ml-[1400px]" />
        <div className="justify-end pr-[280px] w-full py-40 gap-20 flex relative overflow-hidden">
          <div className="border-white bg-gray-400/20 shadow-2xl w-[500px] h-auto p-5">
            <div className="text-2xl  text-black font-content text-start p-10">
              <h1 className="font-extrabold">Content</h1>
              <p className="flex justify-center text-lg">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
                suscipit, nobis voluptas veritatis inventore at eos. Quidem
                neque tenetur quisquam nemo facilis labore blanditiis, sed
                dolorem, reprehenderit nulla quia a numquam!
              </p>
            </div>
            <button className="px-5 flex py-4 gap-2 bg-stone-200  mx-5 mb-5 shadow-2xl rounded-sm hover:scale-110 duration-150 text-[16px]">
            <BsArrowDownRightSquare className="mt-1 text-[18px] font-bold " /> Learn More
              </button>
          </div>
          <div>
            
          </div>
        </div>
      </div>
      </section>

      </div>
    
    
  
  );
}
