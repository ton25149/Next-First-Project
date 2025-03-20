"use client";

import React from "react";
import { BsArrowDownRightSquare } from "react-icons/bs";
import logo1 from "../logos/discord.png"  
import logo2 from "../logos/line.png"
import { useState } from "react";
import { useEffect } from "react";


export default function HomeContent() {

  const [activeIndex, setActiveIndex] = useState(0);
    const [direction, setDirection] = useState("right");
    const [isPaused, setIsPaused] = useState(false);

  // ข้อมูลใน Slides
  const slides = [
    {
      id: 1,
      img: "https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?ixlib=rb-4.0.3&auto=format&fit=crop&w=2560&q=80",
      title: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quo, nulla?",
      des: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus imperdiet, nulla et dictum interdum.",
    },
    {
      id: 2,
      img: "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2940&q=80",
      title: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, earum?",
      des: "Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo.",
    },
    {
      id: 3,
      img: "https://images.unsplash.com/photo-1518623489648-a173ef7824f3?ixlib=rb-4.0.3&auto=format&fit=crop&w=2762&q=80",
      title: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
      des: "Suspendisse tincidunt velit in odio viverra vestibulum. In hac habitasse platea dictumst.",
    },
  ];

  const nextSlide = () => {
    setDirection("right");
    setActiveIndex((prev) => (prev + 1) % slides.length);
    setIsPaused(true);
  };

  const prevSlide = () => {
    setDirection("left");
    setActiveIndex((prev) => (prev - 1 + slides.length) % slides.length);
    setIsPaused(true);
  };

  useEffect(() => {
    // ถ้าไม่ได้หยุดการเปลี่ยนอัตโนมัติ ให้ตั้ง Interval
    if (!isPaused) {
      const interval = setInterval(() => {
        setDirection("right");
        setActiveIndex((prev) => (prev + 1) % slides.length);
      }, 3800); // เวลาเปลี่ยนอัตโนมัติ

      return () => clearInterval(interval); // ล้าง interval เมื่อ component ถูกทำลาย
    }

    // ถ้าหยุดการเปลี่ยนอัตโนมัติ รีเซ็ตหลังเวลาที่กำหนด
    const pauseTimeout = setTimeout(() => {
      setIsPaused(false); // กลับมาทำงานอัตโนมัติ
    }, 10);

    return () => clearTimeout(pauseTimeout); // ล้าง timeout เมื่อ component ถูกทำลาย
  }, [isPaused, activeIndex]);
    
  
  return (
    
<div className="flex flex-col">
      <section className="scroll-smooth relative h-screen flex items-center">
        <div className="video-container "><video
          src="https://videos.pexels.com/video-files/4391550/4391550-uhd_2560_1440_25fps.mp4"
          autoPlay loop
          className="absolute-video hover:transform scale-100"
        ></video>

        </div>
        <div className="relative z-10 w-4/6 text-white text-center mx-auto ">
          <h1 className="font-extrabold text-[45px]">My Website No.1</h1>
          <p className="text-xl leading-relaxed mt-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
            suscipit, nobis voluptas veritatis inventore at eos. Quidem neque
            tenetur.
          </p>
          <button className="mt-6 px-6 py-3 bg-blue-400 hover:bg-blue-800 text-white text-[16px] rounded-xl transition-transform transform hover:scale-110 duration-150">
            Learn More
          </button>
        </div>
      </section>
      <br />
        

      <section className="py-[150px] px-[100px]">
        <div className="textBar flex justify-between ">
        <h1 className="text-3xl font-bold mb-6">Recent Update</h1>
        <a href="" className="text-lg max-w-2xl text-center text-custom-blue2 hover:scale-110 duration-150">
          View More
        </a>
        </div>

        <section>
          <section className="carousel relative">
           

            {/* Carousel */}
            <div className="relative w-full max-w-[12000px] max-h-[700px] mx-auto top-10">
              <div className="overflow-hidden relative rounded-xl h-auto">
                {/* Display only the active slide */}
                <div
                  key={slides[activeIndex].id}
                  className={`flex w-full h-[325px] items-center bg-white rounded-xl shadow-lg ${
                    direction === "right"
                      ? "carousel-slide"
                      : "carousel-slide-left"
                  }`}
                >
                  <img
                    src={slides[activeIndex].img}
                    alt={`carousel-slide-${slides[activeIndex].id}`}
                    className="w-[550px] h-[545px] object-cover rounded-lg"
                  />
                  <div className="text-left w-2/3 p-10 space-y-5">
                    <h3 className="text-xl  font-bold text-custom-grey overflow-hidden text-ellipsis line-clamp-2">
                      {slides[activeIndex].title}
                    </h3>
                    <p className="text-gray-700 overflow-hidden text-ellipsis line-clamp-2">{slides[activeIndex].des}</p>
                  </div>
                </div>
              </div>

              {/* Carousel Controls */}
              <button
                onClick={prevSlide}
                className="absolute top-1/2 left-4 transform -translate-y-1/2 text-white text-2xl bg-gray-800 bg-opacity-50 rounded-full p-1 hover:bg-opacity-75 transition"
              >
                &#8592;
              </button>
              <button
                onClick={nextSlide}
                className="absolute top-1/2 right-4 transform -translate-y-1/2 text-white text-2xl bg-gray-800 bg-opacity-50 rounded-full p-1 hover:bg-opacity-75 transition"
              >
                &#8594;
              </button>
              <div className="absolute bottom-4 left-1/2 transform-translate-x-1/2 flex space-x-2">
                {slides.map((slide) => (
                  <span
                    key={slide.id}
                    onClick={() => setActiveIndex(slide.id - 1)}
                    className={`w-3 h-3 rounded-full cursor-pointer transition ${
                      activeIndex === slide.id - 1
                        ? "bg-black w-6"
                        : "bg-white/50 w-3"
                    }`}
                  />
                ))}
              </div>
            </div>
          </section>
        </section>

       
      </section>

      <section className="py-[1000px]">
    
      </section>

      </div>
    
    
  
  );
}
