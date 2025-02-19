import React from 'react'
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const AboutPage = () => {
  return (
    <div className='p-4'>
      <h1 className='text-center mb-5 text-2xl'>About</h1>
      <div className='max-w-screen-sm mx-auto'>
        <div className='mt-2 h-[16rem] rounded-md bg-tan-50 p-8 flex flex-col'>
          <h1 className='text-justify'>
            This project is a blogging/cataloguing site for books.
            I wanted to design a project that fits my personal hobbies and create a site
            that I would use myself. Mostly a project for UI design practice along with
            refreshing on simple MERN fundamentals.
          </h1>

          <div className='flex justify-center items-center text-3xl mt-auto'>
            <a href="https://github.com/soleilzi" target="_blank" rel="noopener noreferrer">
              <FaGithub className='mr-5' />
            </a>

            <a href="https://www.linkedin.com/in/zeshan-zaki-619029193/" target="_blank" rel="noopener noreferrer">
              <FaLinkedin />
            </a>
          </div>

        </div>
      </div>
    </div>
  )
}

export default AboutPage