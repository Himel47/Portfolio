import React from 'react'

export default function Contact() {
  return (
    <div name="contact" className='max-w-[1250px] mx-auto p-5'>
      <div className='flex flex-col justify-center h-full'>
        <div className="pb-5">
          <p className='text-3xl md:text-5xl font-bold inline border-b-4 border-gray-500'>Contact</p>
          <p className='py-5 text-xl font-bold'>Submit the form below to get in touch with me</p>
        </div>
        <div className='flex justify-center items-center'>
          <form action="https://getform.io/f/alljqkva" method='POST' className='flex flex-col w-full md:w-1/2 px-12 md:px-0'>
            <input type="text" name='name' placeholder='Enter your name' className='p-2 bg-transparent border-2 rounded-lg text-gray-700 focus:outline-none' />
            <input type="email" name='email' placeholder='Enter your mail' className='p-2 my-5 bg-transparent border-2 rounded-lg text-gray-700 focus:outline-none' />
            <textarea name="message" rows="10" placeholder='Enter your message here' className='p-2 bg-transparent border-2 rounded-lg text-gray-700 focus:outline-none'></textarea>
            <button className=" bg-gradient-to-r from-cyan-500 to-blue-600 w-fit my-10 mx-auto text-white px-8 py-3 rounded-md font-bold hover:scale-110 duration-300">Let's talk</button>
          </form>
        </div>
      </div>
    </div>
  )
}
