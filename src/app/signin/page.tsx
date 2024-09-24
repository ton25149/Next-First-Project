import Link from "next/link";

export default function SignIn() {
  return (
    <section className="flex justify-center items-center py-[76px] ">
      <div className=" w-[1000px] h-[900px]">
        <video
          src="https://videos.pexels.com/video-files/3625774/3625774-sd_506_960_25fps.mp4"
          autoPlay
          loop
          className="absolute-video hover:transform scale-100"
        ></video>
      </div>

      <div className="py-40 px-10 h-auto w-auto bg-gray-500/20 shadow-2xl border-white rounded-md flex-col  ">
        <div className="space-y-5 items-center justify-center ">
          <input
            type="text"
            placeholder="Username"
            className="flex p-2 rounded-sm"
          />
          <input
            type="password"
            placeholder="Password"
            className="flex p-2 rounded-sm"
          />
          <button type="submit" className="rounded-lg text-bold ring-1 p-2 flex hover:bg-blue-400  duration-150 px-20 ">
            Sign In
          </button>


          <p className="text-bold text-black text-center ">or</p>


          <Link
          href=""
          className="text-black rounded-lg hover:underline  focus:outline-none active:bg-gray-400 hover:scale-125 duration-150 flex mx-[85px]"
        >
          Sign Up
        </Link>

        </div>
        <div className="items-center pt-5 justify-center absolute">
          
        </div>
      </div>
    </section>
  );
}
