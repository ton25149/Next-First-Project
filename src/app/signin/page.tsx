"use client";
import Link from "next/link";
import { FaCircleUser } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export default function SignIn() {
  return (
    <section className="flex justify-center mx-auto overflow-visible relative">
      <div className="h-auto w-96">
        <video
          src="https://videos.pexels.com/video-files/6115070/6115070-sd_506_960_25fps.mp4"
          autoPlay
          loop
          className="absolute-video hover:transform scale-100 py-5 rounded-md "
        ></video>
      </div>

      <div className="py-[20px] ">
        <div className="py-[60px] px-20 h-[730px] w-auto bg-gradient-to-r from-gray-500/20 shadow-2xl border-white rounded-md flex-col ">
          <div className="space-y-[40px] items-center justify-center ">
            <FaCircleUser className="userIcon text-[60px]" />
            <input
              type="text"
              placeholder="Username"
              className="flex px-10 py-3 rounded-sm text-[22px]"
            />
            <input
              type="password"
              placeholder="Password"
              className="flex px-10 py-3 rounded-sm text-[22px]"
            />
            <button
              type="submit"
              className="signInButton rounded-lg text-bold ring-1 p-3  hover:bg-blue-400  duration-150 px-20 "
            >
              Sign In
            </button>

            <p className="text-bold text-black text-center ">or</p>
          </div>

          <div className="flex items-center space-x-5 mt-[30px] justify-center ">
            <Link href="/">
              <FaFacebook className="text-[30px] hover:scale-125  duration-150" />
            </Link>
            <Link href="/">
              <FaGoogle className="text-[30px] hover:scale-125 duration-150" />
            </Link>
            <Link href="/">
              <FaXTwitter className="text-[30px] hover:scale-125 duration-150 " />
            </Link>

            
          </div>
          <p className=" text-center pt-[50px]">Not a Member? <a href="/" className="text-custom-blue2">Register</a></p>
        </div>
      </div>
    </section>
  );
}
