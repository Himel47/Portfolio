import React from 'react'
import himel from "../assets/ami.png";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import {ReactTyped} from 'react-typed';
import { Link } from "react-scroll";

export default function Main() {

  return (
    <div name="home" className="md:flex flex-col sm:flex-row items-center justify-between mx-auto p-4 mb-6 mt-[100px] max-w-[1250px]">
      <div className='col-span-1 flex flex-col my-4 justify-center'>
        <h1 className=" text-xl md:text-3xl">
          I am a
        </h1>
        <ReactTyped className='text-3xl md:text-4xl py-3 font-bold'
          strings={
            ["Web Developer", "Full Stack Developer", "Dedicated Coder", "Backend Developer"]
          }
          typeSpeed={100}
          backSpeed={50}
          loop = {true}
        />
        <p className=' sm:max-w-[70%] py-3 text-justify'>
          I am passionate for creating beautiful and functional websites. <br />I love to work on web application using technologies like <b>ReactJS</b>, <b>Express</b>, <b>NodeJS</b>, <b>Dotnet Core</b>, <b>MS SQL Server</b>, and <b>Tailwind</b>.
        </p>
        <Link to="portfolio" smooth duration={400} className="group flex items-center gap-1 justify-center bg-gradient-to-r from-cyan-500 to-blue-600 w-fit my-2 text-white p-3 rounded-md font-bold">
          Portfolio
          <span className=' group-hover:rotate-90 duration-300'>
            <MdOutlineKeyboardArrowRight size={25}/>
          </span>
        </Link>
      </div>
      <div className='col-span-1 mx-4 place-items-center'>
        <img src={himel} alt="Himel" className=' w-[420px] rounded-3xl inline'/>
      </div>
    </div>
  )
}
