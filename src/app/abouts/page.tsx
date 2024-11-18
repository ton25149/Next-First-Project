"use client";
import { FaAngleRight } from "react-icons/fa6";
import { Carousel } from "@material-tailwind/react";
import { useState } from "react";

export default function Abouts() {

  const [activeIndex, setActiveIndex] = useState(0);

  // ข้อมูลแต่ละหน้า
  const slides = [
    {
      id:1,
      img: "https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?ixlib=rb-4.0.3&auto=format&fit=crop&w=2560&q=80",
      title: "Our History",
      des:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus imperdiet, nulla et dictum interdum, nisi lorem egestas odio.",
    },
    {
      id:2,
      img: "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2940&q=80",
      title: "Our Vision",
      des:
        "Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo.",
    },
    {
      id:3,
      img: "https://images.unsplash.com/photo-1518623489648-a173ef7824f3?ixlib=rb-4.0.3&auto=format&fit=crop&w=2762&q=80",
      title: "Our Mission",
      des:
        "Suspendisse tincidunt velit in odio viverra vestibulum. In hac habitasse platea dictumst.",
    },
  ];

  const nextSlide = () => {
    setActiveIndex((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setActiveIndex((prev) => (prev - 1 + slides.length) % slides.length);
  };



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
        <div className="space-y-5 z-1 relative">
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

          <div id="left-img" className=" absolute top-2 z-0">
            <img
              src="https://images.pexels.com/photos/4049459/pexels-photo-4049459.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt=""
              className="about-img3 object-contain rounded-lg"
            />

            <img
              src="https://images.pexels.com/photos/5053740/pexels-photo-5053740.jpeg"
              alt=""
              className="about-img2 object-contain flex rounded-lg mt-2 ml-[50px]"
            />
          </div>

          <div
            id="right-img"
            className="space-y-4 absolute top-4 justify-items-end "
          >
            <img
              src="https://images.pexels.com/photos/6168/hands-woman-laptop-notebook.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt=""
              className="about-img4 justify-end z-0 rounded-2xl mr-[50px]"
            />

            <img
              src="https://images.pexels.com/photos/4709285/pexels-photo-4709285.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt=""
              className="about-img4 justify-end z-0 rounded-2xl "
            />
          </div>
        </div>

       
        
        <section >

      
      <section className="">
       
        {/* Carousel */}
        <div className="relative w-full max-w-xl mx-auto mt-[150px] left-[180px]">
          <div className="overflow-hidden relative rounded-xl h-80">
            {/* Display only the active slide */}
            <div
              key={slides[activeIndex].id}
              className="flex w-full items-center p-5 bg-white rounded-xl shadow-lg"
            >
              <img
                src={slides[activeIndex].img}
                alt={`carousel-slide-${slides[activeIndex].id}`}
                className="w-1/2 object-cover rounded-lg"
              />
              <div className="w-1/2 text-left space-y-4 pl-5">
                <h3 className="text-xl font-bold text-custom-grey">{slides[activeIndex].title}</h3>
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
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
            {slides.map((_, id) => (
              <span
                key={id}
                onClick={() => setActiveIndex(id)}
                className={`w-3 h-3 rounded-full cursor-pointer transition-all ${
                  activeIndex === id ? "bg-black w-6" : "bg-white/50 w-3"
                }`}
              />
            ))}
          </div>
</div>

      </section>
    </section>




      

        <section className="flex mt-[40px] ">
          <div className="mx-auto mt-96   w-1/2 text-custom-grey  left-[300px] relative rounded-3xl shadow-2xl p-5">
            <h1 className="text-[26px] font-bold my-4 text-start ml-4">
              Our Objective
            </h1>
            <p className="text-start">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Necessitatibus cupiditate placeat quis. Explicabo earum
              praesentium illum sunt repellat quod esse strum, numquam quidem
              asasdasd enim.
            </p>
          </div>
        </section>

        <img
          src="https://images.pexels.com/photos/1595385/pexels-photo-1595385.jpeg"
          alt=""
          className="all-img z-0 rounded-xl "
        />
      </section>
    </section>
  );
}
