import React from 'react'

export default function Projects() {
  return (
    <div name="projects" className='max-w-[1250px] mx-auto my-[100px]'>
      <div className="flex flex-col w-full justify-center h-full p-5">
        <div className="pb-5">
          <p className='text-3xl md:text-5xl font-bold inline border-b-4 border-gray-500'>Portfolio</p>
          <p className='py-5 text-lg font-bold'>Check out some of my work here</p>
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-5 px-10 sm:px-0">
          <div className="">
            <img src="" alt="" />
            <div className="">
              <button>Demo</button>
              <button>Code</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
