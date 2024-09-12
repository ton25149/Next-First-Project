"use client";

import React from "react";

export default function HomeContent() {
  return (
    
<div>
      <section className="scroll-smooth">
        <div className="video-container "><video
          src="https://videos.pexels.com/video-files/8820216/8820216-uhd_3840_2160_25fps.mp4"
          autoPlay loop
          className="absolute-video hover:transform scale-100"
        ></video>

        </div>
      <div className="justify-center items-center w-full py-60 gap-5 px-5 flex relative overflow-hidden">
        <div className="border-white bg-gray-500/20 shadow-2xl w-4/6 h-96 ">
          <div className="text-2xl font-mono text-white font-content text-start p-10">
            <h1 className="font-extrabold ">Content</h1>
            <p className="flex justify-center text-lg ">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
              suscipit, nobis voluptas veritatis inventore at eos. Quidem neque
              tenetur quisquam nemo facilis labore blanditiis, sed dolorem,
              reprehenderit nulla quia a numquam!
            </p>

            <h1 className="font-extrabold">Content</h1>
            <p className="flex justify-center text-lg">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
              suscipit, nobis voluptas veritatis inventore at eos. Quidem neque
              tenetur quisquam nemo facilis labore blanditiis, sed dolorem,
              reprehenderit nulla quia a numquam!
            </p>
          </div>

          <button className="px-8 py-4 bg-stone-400  mx-5 mb-10 shadow-2xl rounded-full hover:scale-110 duration-150">
            Learn More
          </button>
        </div>
        </div>
      </section>
      <br />
        

      <section className="py-20">
    <div className=" items-center justify-center  w-screen custom-img  bg-center bg-no-repeat bg-fixed flex relative object-cover py-10">
      
        
        <div className="justify-center items-center w-full py-40 gap-5 px-5 flex relative overflow-hidden">
          <div className="border-white bg-gray-500/20 shadow-2xl w-4/6 h-96 p-20">
            <div className="text-2xl font-mono text-black font-content text-start p-10">
              <h1 className="font-extrabold">Content</h1>
              <p className="flex justify-center text-lg">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
                suscipit, nobis voluptas veritatis inventore at eos. Quidem
                neque tenetur quisquam nemo facilis labore blanditiis, sed
                dolorem, reprehenderit nulla quia a numquam!
              </p>
            </div>
            <button className="px-8 py-4 bg-stone-400  mx-5 mb-10 shadow-2xl rounded-full hover:scale-110 duration-150">
              Learn More
            </button>
          </div>
          <div>
            <img
              src="https://images.pexels.com/photos/11877141/pexels-photo-11877141.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt=""
              className="h-96 object-cover"
            />
          </div>
        </div>
      </div>
      </section>
      <section className="py-20">
    <div className=" items-center justify-center  w-screen custom-img  bg-center bg-no-repeat bg-fixed flex relative object-cover py-10">
      
        
        <div className="justify-center items-center w-full py-40 gap-5 px-5 flex relative overflow-hidden">
          <div className="border-white bg-gray-500/20 shadow-2xl w-4/6 h-96 p-20">
            <div className="text-2xl font-mono text-black font-content text-start p-10">
              <h1 className="font-extrabold">Content</h1>
              <p className="flex justify-center text-lg">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
                suscipit, nobis voluptas veritatis inventore at eos. Quidem
                neque tenetur quisquam nemo facilis labore blanditiis, sed
                dolorem, reprehenderit nulla quia a numquam!
              </p>
            </div>
            <button className="px-8 py-4 bg-stone-400  mx-5 mb-10 shadow-2xl rounded-full hover:scale-110 duration-150">
              Learn More
            </button>
          </div>
          <div>
            <img
              src="https://images.pexels.com/photos/11877141/pexels-photo-11877141.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt=""
              className="h-96 object-cover"
            />
          </div>
        </div>
      </div>
      </section>
      </div>
    
    
  
  );
}
