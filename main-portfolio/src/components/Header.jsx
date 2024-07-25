import { useState } from "react";
import React from 'react'
import {AiOutlineMenu, AiOutlineClose} from 'react-icons/ai'

export default function Header() {

  const links = [
    {
      id: 1,
      link: 'home',
    },
    {
      id: 2,
      link: 'about',
    },
    {
      id: 3,
      link: 'portfolio',
    },
    {
      id: 4,
      link: 'experience',
    },
    {
      id: 5,
      link: 'contact',
    }
  ];

  const [toggle, setToggle] = useState(false);

  return (
    <div className="p-4 bg-slate-700">
      <div className=' max-w-[1280px] mx-auto flex justify-between items-center px-5 text-white h-20'>
        <div className="">
          <h1 className="text-5xl ml-2 font-bold font-vibes">Himel</h1>
        </div>
        {
          toggle ?
          <AiOutlineClose onClick={()=>setToggle(!toggle)} className=' z-10 text-gray-400 text-2xl md:hidden block'/>
          :
          <AiOutlineMenu onClick={()=>setToggle(!toggle)} className=' z-10 text-gray-400 text-2xl md:hidden block'/>
        }
        <ul className="hidden md:flex">
          {
            links.map(({ id, link }) => (
              <li key={id} className='px-4 cursor-pointer capitalize font-medium text-gray-400 hover:scale-105 duration-300'>
                {link}
              </li>
            ))
          }
        </ul>
        <ul className={`absolute duration-300 md:hidden w-full h-screen text-gray-400 bg-gradient-to-b from-black to-slate-500 top-0 flex flex-col justify-center items-center ${toggle?'left-0':'left-[-100%]'}`}>
          {
            links.map(({ id, link }) => (
              <li key={id} className='p-4 cursor-pointer capitalize font-medium text-gray-400 hover:scale-105 duration-300'>
                {link}
              </li>
            ))
          }
        </ul>
      </div>
    </div>
  )
}
