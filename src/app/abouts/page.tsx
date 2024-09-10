"use client";
import React from "react";
import { MdOutlineGetApp } from "react-icons/md";

function about() {
  return (
    <div className="items-center justify-center  w-screen custom-img2  bg-center bg-no-repeat bg-fixed flex relative object-cover py-10 h-screen">
    <div className="flex justify-center py-40">
      <div className="jobContainer flex gap-10 justify-center flex-wrap items-center py-10 ">
        <div className="group group/item singleJob w-[250px] p-[20px]  rounded-[10px] hover:bg-gray-500/20 shadow-lg hover:shadow-lg hover:text-white ">
          <span className="flex justify-between items-center gap-4 ">
            <h1 className="text-[16px] font-semibold text-black group-hover:text-white">
              Content
            </h1>
            <span className="flex items-center text-black gap-1 group-hover:text-white">
              <MdOutlineGetApp />
              Application
            </span>
          </span>

          <h6 className="text-black group-hover:text-white">App</h6>

          <p className="text-[13px] mt-[20px] p-[20px] text-blac gap-2 group-hover:text-white border-t-[2px]">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Harum hic
            voluptatibus itaque odit quas accusamus. Accusamus corporis
            excepturi laudantium reiciendis?
          </p>

          <button className="rounded-[10px] border-[2px] block p-[10px] w-full text-[14px] font-semibold hover:bg-white hover:text-black bg-slate-600">
            Download
          </button>
        </div>
      </div>
    </div>
    </div>
  );
}

export default about;
