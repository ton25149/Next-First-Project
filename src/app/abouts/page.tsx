"use client";

import { useRef } from "react";
import { useEffect } from "react";
import { useState } from "react";
import { FaAngleRight } from "react-icons/fa6";
import { FaChevronDown } from "react-icons/fa";



export default function Abouts() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState("right");
  const [isPaused, setIsPaused] = useState(false);
  const sectionRef = useRef(null);

  const handleScroll = () => {
    sectionRef.current?.scrollIntoView({ behavior: "smooth" });
  };

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
    <section className="mt-10 flex background">
      
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
      <section className="mt-[150px] relative text-center">
        <div className="space-y-5 z-1 ">
          <h1 className="text-[16px] text-custom-grey z-1">Our Mission</h1>
          <h2 className="text-bold text-[40px] text-slate-700">
            Lorem ipsum dolor sit amet.
          </h2>

          <p className="mx-auto text-center text-[16px] text-custom-grey w-[50%]">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam quis
            aliquam eius vel temporibus asperiores quam maxime illo
          </p>

          <div id="left-right-img" className="relative w-full">
            {/* กลุ่มรูปด้านซ้าย */}
            <div className="absolute left-5 transform -translate-y-1/2 flex flex-col space-y-4 ">
              <img
                src="https://images.pexels.com/photos/4049459/pexels-photo-4049459.jpeg"
                alt="Left Image 1"
                className="object-cover rounded-lg w-[250px] h-[200px]"
              />
              <img
                src="https://images.pexels.com/photos/5053740/pexels-photo-5053740.jpeg"
                alt="Left Image 2"
                className="object-cover rounded-lg w-[250px] h-[200px]"
              />
            </div>

            {/* กลุ่มรูปด้านขวา */}
            <div className="absolute right-5 transform -translate-y-1/2 flex flex-col space-y-4">
              <img
                src="https://images.pexels.com/photos/6168/hands-woman-laptop-notebook.jpg"
                alt="Right Image 1"
                className="object-cover rounded-lg w-[250px] h-[200px] relative"
              />
              <img
                src="https://images.pexels.com/photos/4709285/pexels-photo-4709285.jpeg"
                alt="Right Image 2"
                className="object-cover rounded-lg w-[250px] h-[200px]"
              />
            </div>
          </div>
          {/* Button Scroll */}
          <div className={` flex flex-col items-center`}>
            <button
              onClick={handleScroll}
              className="flex flex-col items-center text-gray-400 hover:text-gray-600 transition-all"
            >
              <FaChevronDown className="animate-bounce text-2xl mb-1 " />
              <span className="text-sm">Scroll to see more</span>
            </button>
          </div>
        </div>

          {/* carousel */}
        <section>
          <section ref={sectionRef} className=" carousel relative top-[300px] ">
          <div className="fixed top-0 left-0 w-[400px] h-full z-[-1]">
      
    </div>
            <div className=" textBox absolute ml-[150px] p-8 shadow-xl  rounded-2xl bg-white w-1/2 ">
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
            <div className="relative w-full max-w-[565px] mx-auto left-[300px] top-[180px]">
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

        <section className="paragraph mx-auto justify-center items-center mt-[1300px] ">
          {/* Third Paragrahp */}
          <div className="mt-[200px]">
            <h1 className="text-[35px] text-center font-extrabold text-slate-700 ">
              What we do 
            </h1>
            <p className="w-1/2 text-center mx-auto text-custom-grey">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
              ipsum nam eos et sunt corporis, asperiores temporibus vitae soluta
              illo fugit aliquid minus, vero libero esse illum consequuntur
              adipisci fuga.
            </p>

            {/* ContentBox */}

            <div className="flex justify-center space-x-5 t-[200px]\">
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


          {/* Last Context */}
        <div className="container mx-auto -mt-[600px] pb-[150px] max-w-screen-xl ">
          <h1 className="text-center text-4xl font-bold text-slate-700">Our History</h1>

          <div className="mx-auto mt-10">
            <h2 className="text-2xl font-bold text-start text-slate-700">Struggle</h2>
            <p className="text-custom-grey italic text-start my-5">2010-2012</p>
            <p className="mt-3 text-custom-grey text-start">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid
              excepturi ipsam repellat voluptatum nostrum sint doloremque omnis
              asperiores? Tempore voluptas quam debitis ducimus voluptatum
              deserunt, optio fugiat repudiandae nemo suscipit. Lorem ipsum
              dolor sit amet, consectetur adipisicing elit. Est sequi ea
              accusamus numquam esse, pariatur non reiciendis similique
              repellendus culpa!
            </p>
          </div>

          <div className="max-w-full mx-auto mt-10">
            <h2 className="text-2xl font-bold text-start text-slate-700">Hypergrowth</h2>
            <p className="text-custom-grey italic text-start my-5">2012-2014</p>
            <p className="mt-3 text-custom-grey text-start">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laborum
              atque minima magni quas rerum maiores officiis dolor soluta
              molestias temporibus eum tenetur, neque hic. Soluta ducimus ex
              tempora tenetur omnis nostrum dignissimos illo quas porro, est
              voluptatibus pariatur temporibus et voluptate ab eveniet
              consequuntur veritatis incidunt accusamus repellendus? Maiores
              voluptate ea, iste nisi reiciendis ratione beatae dicta ipsum ad
              optio?
            </p>
          </div>

          <div className="max-w-full mx-auto mt-10">
            <h2 className="text-2xl font-bold text-start text-slate-700">Expand & Diversify</h2>
            <p className="text-custom-grey italic text-start my-5">2012-2014</p>
            <p className="mt-3 text-custom-grey text-start">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laborum
              atque minima magni quas rerum maiores officiis dolor soluta
              molestias temporibus eum tenetur, neque hic. Soluta ducimus ex
              tempora tenetur omnis nostrum dignissimos illo quas porro, est
              voluptatibus pariatur temporibus et voluptate ab eveniet
              consequuntur veritatis incidunt accusamus repellendus? Maiores
              voluptate ea, iste nisi reiciendis ratione beatae dicta ipsum ad
              optio? Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Harum veniam sequi placeat tempora sed quia!
            </p>
            
          </div>
        </div>
      </section>
    </section>
  );
}
