import React from 'react'
import first from "../assets/projectImages/first.jpg";
import second from "../assets/projectImages/second.jpg";
import third from "../assets/projectImages/third.jpg";
import fourth from "../assets/projectImages/fourth.jpg";
import fifth from "../assets/projectImages/fifth.jpg";

export default function Projects() {

  const projects = [
    {
      id: 1,
      src: first
    },
    {
      id: 2,
      src: second
    },
    {
      id: 3,
      src: third
    },
    {
      id: 4,
      src: fourth
    },
    {
      id: 5,
      src: fifth
    },
  ]

  return (
    <div name="portfolio" className='max-w-[1250px] mx-auto my-[100px]'>
      <div className="flex flex-col w-full justify-center h-full p-5">
        <div className="pb-5">
          <p className='text-3xl md:text-5xl font-bold inline border-b-4 border-gray-500'>Portfolio</p>
          <p className='py-5 text-xl font-bold'>Check out some of my work here</p>
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-5 px-10 sm:px-0">
          {projects.map(({ id, src }) => (
            <div key={id} className="shadow-lg shadow-gray-400 rounded-xl">
              <img src={src} alt="first project" className='rounded-lg hover:scale-105 duration-200' />
              <div className="flex items-center justify-center">
                <button className='w-1/2 py-2 px-5 m-3 hover:scale-105 duration-200'>Code</button>
                <button className='w-1/2 py-2 px-5 m-3 hover:scale-105 duration-200'>Demo</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
