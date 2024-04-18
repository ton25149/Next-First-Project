"use client"

import React from 'react'

export default function HomeContent() {
  return (
    <div className="flex items-center justify-center h-screen custom-img bg-fixed bg-center bg-cover ">
      <div className='border-white bg-gray-500/20 shadow-2xl w-4/6 h-auto '>

        <div className='text-2xl font-mono text-white font-content text-start p-10'>
        <h1 className='font-extrabold items-start '>
          Content 
        </h1>
        <p className='flex justify-center text-lg'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime suscipit, nobis voluptas veritatis inventore at eos. Quidem neque tenetur quisquam nemo facilis labore blanditiis, sed dolorem, reprehenderit nulla quia a numquam!
        </p>
        </div>
        
        <button className='px-8 py-4 bg-stone-400  mx-5 mb-10 shadow-2xl rounded-full hover:scale-110'>Learn More</button>
      </div>
      
    </div>
  )
}
