"use client";
import { FaAngleRight } from "react-icons/fa6";

export default function abouts() {
  return (
    <section className="mt-10 absolute">
    <section>
    <a href="/" className="justify-start absolute flex ml-40 text-slate-400 hover:text-custom-blue">Home 
    </a>
    <FaAngleRight className="absolute mt-[5px] ml-[210px]" />
    <p  className="justify-start absolute ml-[235px] ">Abouts
    </p>
    </section>
    <section className="mt-[210px] relative text-center">
        
      <div className="space-y-5 z-1 relative">
        <h1 className="text-[22px] text-custom-grey z-1">About Us</h1>
        <h2 className="text-bold text-[40px] text-custom-grey ">Lorem ipsum dolor sit amet.</h2>

        <p className="textAbouts text-[16px] text-custom-grey mx-auto rounded-2xl shadow-2xl p-3 z-1">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam quis
          aliquam eius vel temporibus asperiores quam maxime illo voluptatibus,
          enim officiis quae, atque non, quos error animi quo a consequuntur?
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

        <div id="right-img" className="space-y-4 absolute top-4 justify-items-end ">
            <img src="https://images.pexels.com/photos/6168/hands-woman-laptop-notebook.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" className="about-img4 justify-end z-0 rounded-2xl mr-[50px]" />

            <img src="https://images.pexels.com/photos/4709285/pexels-photo-4709285.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" className="about-img4 justify-end z-0 rounded-2xl " />
        </div>

        
        
      </div>


      <section className="flex mt-[40px] ">
        <p className="mx-auto mt-96 justify-center items-center w-1/2 text-custom-blue bg-slate-200 left-[350px] relative rounded-3xl shadow-2xl p-5">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit.
          Necessitatibus cupiditate placeat quis. Explicabo earum praesentium
          illum sunt repellat quod esse strum, numquam quidem asasdasd enim.
        </p>
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
