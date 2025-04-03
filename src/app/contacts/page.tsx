"use client";
import { useEffect, useRef } from "react";
import { FaAngleRight } from "react-icons/fa6";
import Head from "next/head";

function Contacts() {
  const isMapLoaded = useRef(false);

  useEffect(() => {
    // โหลด longdo script
    const script = document.createElement("script");
    script.src =
      "https://api.longdo.com/map/?key=85765d7fe8d46d71626e1c59b68256da";
    script.async = true;
    script.onload = () => {
      if (typeof longdo !== "undefined" && !isMapLoaded.current) {
        isMapLoaded.current = true;

        window.map = new longdo.Map({
          placeholder: document.getElementById("map"),
          zoom: 10,
          location: { lat: 13.7563, lng: 100.5018 },
        });
      }
    };
    document.head.appendChild(script);

    return () => {
      // ลบสคริปต์ออกเมื่อคอมโพเนนต์ถูกลบ
      document.head.removeChild(script);
    };
  }, []);

  return (
    <section className="">
      <Head>
        <title>Contact</title>
        <meta name="description" content="Contact Page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="mt-10">
        <a
          href="/"
          className="justify-start absolute flex ml-40 text-slate-400 hover:text-custom-blue"
        >
          Home
        </a>
        <FaAngleRight className="absolute mt-[5px] ml-[210px]" />
        <p className="justify-start absolute ml-[235px]">Contact</p>
      </div>

      <div className="ContactHeader mt-[80px] ml-[155px] absolute">
        <h1 className="text-[40px] font-bold text-custom-grey">Contact</h1>
      </div>

      <section className="Map pt-[200px] flex pl-[800px] pb-[100px] w-screen ">
        <div
          className="absolute left-[200px]"
          id="map"
          style={{
            width: "800px",
            height: "450px",
            backgroundColor: "lightblue",
          }}
        ></div>

        <div className="textAbouts shadow-xl mt-8 ml-[100px] rounded-2xl h-auto w-1/2 p-[25px] pb-[40px] outline-double bg-white z-0">
          <h2 className="text-start font-extrabold text-[22px] text-slate-500">
            Lorem, ipsum dolor.
          </h2> <br />
          <p className="mr-[20px] text-slate-700 leading-relexed text-[18px] ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore
            cumque, exercitationem maxime, d esse at aliquam sequi quasi. Lorem
            ipsum dolor sit amet.
          </p>
          <br />
          <p className="mr-[20px] text-custom-grey">
            Contact Customer Services:
            <br />
            <a className="text-blue-400">support@gmail.com</a>
          </p>
           <p className="text-custom-grey">Media Relations :</p> 
           <a className="text-blue-400 pb-5">pr@nextjs.com</a>
        </div>
        
        
        
      </section>
    </section>
  );
}

export default Contacts;
