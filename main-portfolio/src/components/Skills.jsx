import React from 'react'
import HtmlImage from "../assets/html.png";
import CssImage from "../assets/css.png";
import GithubImage from "../assets/github.png";
import JSImage from "../assets/javascript.png";
import NodeImage from "../assets/node.png";
import ReactImage from "../assets/react.png";
import TailWindImage from "../assets/tailwind.png";
import DotnetImage from "../assets/csharp.png";

export default function Skills() {

  const skillSet = [
    {
      id:1,
      src: ReactImage,
      title: "ReactJS",
      style: "shadow-sky-500"
    },
    {
      id:2,
      src: JSImage,
      title: "JavaScript",
      style: "shadow-yellow-600"
    },
    {
      id:3,
      src: NodeImage,
      title: "NodeJS",
      style: "shadow-lime-600"
    },
    {
      id:4,
      src: TailWindImage,
      title: "Tailwind",
      style: "shadow-teal-600"
    },
    {
      id:5,
      src: CssImage,
      title: "CSS",
      style: "shadow-blue-500"
    },
    {
      id:6,
      src: HtmlImage,
      title: "HTML",
      style: "shadow-orange-600"
    },
    {
      id:7,
      src: GithubImage,
      title: "Github",
      style: "shadow-gray-400"
    },
    {
      id:8,
      src: DotnetImage,
      title: "C# ASP.Net",
      style: "shadow-purple-600"
    },
  ]

  return (
    <div name="skills" className='max-w-[1250px] mx-auto my-[100px]'>
      <div className="flex flex-col w-full justify-center h-full p-5">
        <div className="pb-5">
          <p className='text-3xl md:text-5xl font-bold inline border-b-4 border-gray-500'>Skills</p>
          <p className='py-5 text-xl font-bold'>These are the technologies I've worked with</p>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-5 px-10 sm:px-0">
          {skillSet.map(({ id, src, title, style }) => (
            <div key={id} className={`text-center shadow-lg rounded-xl hover:scale-105 duration-200 ${style}`}>
              <img src={src} width={200} alt="first project" className='mx-auto rounded-md w-28' />
              <p className='mt-4 text-lg'>{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
