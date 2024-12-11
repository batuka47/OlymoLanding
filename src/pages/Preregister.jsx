import React from 'react'
import backdrop from "../assets/Frame 71.svg"
const Preregister = () => {
  return (
    <main className='w-full h-[60dvh] flex flex-col justify-end items-center relative'>

        <header className="font-bold text-3xl absolute top-3 w-full text-center py-3">Register early to be demo tester </header>
        <div className='flex mb-8 z-40'>
            <input type="email" placeholder='enter your email' className='outline-none bg-[#faf9f6] border-[1.5px] h-14 border-[#121212] p-3 px-4 rounded-2xl'/>
            <button className='h-14 p-3 px-5 ml-2 rounded-2xl bg-[#121212] text-[#faf9f6] active:scale-125'>Register</button>
        </div>
        <img src={backdrop} alt="" className='hidden md:block absolute -bottom-1/2 w-full'/>
    </main>
  )
}

export default Preregister