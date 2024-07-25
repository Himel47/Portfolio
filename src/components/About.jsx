import React from 'react'

export default function About() {
  return (
    <div name="about" className='max-w-[1250px] mx-auto my-[100px] '>
      <div className='flex flex-col justify-center p-5 w-full h-full'>
        <div className='pb-5'>
          <p className='text-3xl md:text-5xl font-bold inline border-b-4 border-gray-500'>About</p>
        </div>
        <p className='text-lg mt-10 text-justify'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque consequatur impedit libero architecto iste exercitationem omnis, quis animi porro temporibus a alias possimus repellendus? Omnis voluptatibus, maiores nam, accusamus rerum dolorem corrupti quidem nemo inventore distinctio dolores deleniti voluptatem molestiae?
        </p>
        <br />
        <p className='text-lg text-justify'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit repellat ipsa iusto harum quam quisquam laborum beatae voluptate animi veniam corrupti, explicabo ipsum nam quaerat voluptates similique laudantium? Doloremque cumque ut rem tempore suscipit fugiat, possimus amet illo nobis optio?
        </p>
      </div>
    </div>
  )
}
