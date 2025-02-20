"use client";

import { useEffect } from "react";
import { useState } from "react";
import { FaAngleRight } from "react-icons/fa6";

export default function Abouts() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState("right");
  const [isPaused, setIsPaused] = useState(false);

  // ข้อมูลแต่ละหน้า
  const slides = [
    {
      id: 1,
      img: "https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?ixlib=rb-4.0.3&auto=format&fit=crop&w=2560&q=80",
      title: "Our History",
      des: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus imperdiet, nulla et dictum interdum.",
    },
    {
      id: 2,
      img: "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2940&q=80",
      title: "Our Vision",
      des: "Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo.",
    },
    {
      id: 3,
      img: "https://images.unsplash.com/photo-1518623489648-a173ef7824f3?ixlib=rb-4.0.3&auto=format&fit=crop&w=2762&q=80",
      title: "Our Mission",
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
    <section className="mt-10 absolute">
      <section>
        <a
          href="/"
          className="justify-start absolute flex ml-40 text-slate-400 hover:text-custom-blue"
        >
          Home
        </a>
        <FaAngleRight className="absolute mt-[5px] ml-[210px]" />
        <p className="justify-start absolute ml-[235px] ">Abouts</p>
      </section>
      <section className="mt-[210px] relative text-center">
        <div className="space-y-5 z-1 ">
          <h1 className="text-[22px] text-custom-grey z-1">About Us</h1>
          <h2 className="text-bold text-[40px] text-custom-grey ">
            Lorem ipsum dolor sit amet.
          </h2>

          <p className="textAbouts text-[16px] text-custom-grey mx-auto rounded-2xl shadow-2xl p-7 z-1">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam quis
            aliquam eius vel temporibus asperiores quam maxime illo
            voluptatibus, enim officiis quae, atque non, quos error animi quo a
            consequuntur?
          </p>

          <div id="left-right-img" className=" z-0 static">
            <img
              src="https://images.pexels.com/photos/4049459/pexels-photo-4049459.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt=""
              className="about-img3 object-contain rounded-lg ml-[20px]"
            />

            <img
              src="https://images.pexels.com/photos/5053740/pexels-photo-5053740.jpeg"
              alt=""
              className="about-img2 object-contain flex rounded-lg mt-2 ml-[50px]"
            />

            <img
              src="https://images.pexels.com/photos/6168/hands-woman-laptop-notebook.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt=""
              className="about-img4 object-contain rounded-lg ml-[1150px] "
            />

            <img
              src="https://images.pexels.com/photos/4709285/pexels-photo-4709285.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt=""
              className="about-img4 z-0 rounded-lg ml-[1100px] relative mt-4"
            />
          </div>
        </div>

        <section>
          <section className="carousel">
            <div className="textBox absolute mt-[150px] ml-[150px] p-8 shadow-xl  rounded-2xl bg-white w-1/2">
              <h1 className="font-bold text-start text-[22px] h-auto">
                Lorem ipsum dolor sit amet.
              </h1>
              <p className="text-start pt-4">
                {" "}
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex
                aliquid explicabo beatae sunt consectetur architecto cumque
                tenetur, amet, sed temporibus quaerat rem ipsa, itaque quidem
                recusandae odit similique molestias praesentium dolorem nostrum
                obcaecati nisi suscipit? Nesciunt cumque harum fugiat impedit?
                Inventore labore saepe repellat ea at facilis aperiam illum
                optio.
              </p>
            </div>

            {/* Carousel */}
            <div className="relative w-full max-w-[565px] mx-auto mt-[150px] left-[180px]">
              <div className="overflow-hidden relative rounded-xl h-auto">
                {/* Display only the active slide */}
                <div
                  key={slides[activeIndex].id}
                  className={`flex w-full h-[225px] items-center p-5 bg-white rounded-xl shadow-lg ${
                    direction === "right"
                      ? "carousel-slide"
                      : "carousel-slide-left"
                  }`}
                >
                  <img
                    src={slides[activeIndex].img}
                    alt={`carousel-slide-${slides[activeIndex].id}`}
                    className="w-[220px] h-[145px] object-cover rounded-lg"
                  />
                  <div className="text-left top-1 w-2/3 space-y-2 p-3">
                    <h3 className="text-xl font-bold text-custom-grey">
                      {slides[activeIndex].title}
                    </h3>
                    <p className="text-gray-700">{slides[activeIndex].des}</p>
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

        <section className="paragraph justify-center items-center static">
          {/* Third Paragrahp */}
          <div className="mt-[200px]">
            <h1 className="text-[25px] text-center mx-auto font-extrabold text-custom-grey ">
              What we do
            </h1>
            <p className="w-1/2 text-center justify-center items-center mx-auto">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
              ipsum nam eos et sunt corporis, asperiores temporibus vitae soluta
              illo fugit aliquid minus, vero libero esse illum consequuntur
              adipisci fuga.
            </p>

            {/* ContentBox */}

            <div className="flex justify-center space-x-5 ">

              <div className="textBox mt-[50px] mb-[70px] shadow-xl rounded-2xl bg-white w-[250px] h-[250px]">
                <img
                  src="https://images.pexels.com/photos/607812/pexels-photo-607812.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                  alt=""
                  className="relative w-[80%] h-[70%] m-1 rounded-2xl object-cover mx-auto"
                />
                <h2 className="p-5 text-center">IOS</h2>
              </div>

              <div className="textBox my-[150px] mb-[70px] ml-[150px] mx-auto shadow-xl rounded-2xl bg-white w-[250px] h-[250px]">
                <img
                  src="https://images.pexels.com/photos/607812/pexels-photo-607812.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                  alt=""
                  className="relative w-[80%] h-[70%] m-1 rounded-2xl object-cover mx-auto"
                />
                <h2 className="p-5 text-center">Android</h2>
              </div>

              <div className="textBox my-[50px] mb-[70px] ml-[150px] mx-auto shadow-xl rounded-2xl bg-white w-[250px] h-[250px]">
                <img
                  src="https://images.pexels.com/photos/607812/pexels-photo-607812.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                  alt=""
                  className="relative w-[80%] h-[70%] m-1 rounded-2xl object-cover mx-auto"
                />
                <h2 className="p-5 text-center">Windows</h2>
              </div>

              <div className="textBox mt-[150px] mx-auto shadow-xl rounded-2xl bg-white w-[250px] h-[250px]">
                <img
                  src="https://images.pexels.com/photos/607812/pexels-photo-607812.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                  alt=""
                  className="w-[80%] h-[70%] m-1 rounded-2xl object-cover mx-auto"
                />
                <h2 className="p-5 text-center">MacOS</h2>
              </div>
            </div>
            
          </div>

          
        </section>

        <div className="flex  items-center justify-center space-x-5 -mt-[600px] pb-10">
          <img
            src="https://images.pexels.com/photos/1595385/pexels-photo-1595385.jpeg"
            alt=""
            className="about-img rounded-xl ml-5"
          />
          <div className=" w-1/2 text-custom-grey rounded-3xl shadow-2xl p-5 justify-center">
            <h1 className="text-[26px] font-bold text-start ml-4">
              Our Objective
            </h1>
            <p className="text-start">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Necessitatibus cupiditate placeat quis. Explicabo earum
              praesentium illum sunt repellat quod esse strum, numquam quidem
              asasdasd enim.
            </p>
          </div>
        </div>
      </section>
    </section>
  );
}
