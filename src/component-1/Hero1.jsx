import {
  FaLinkedin,
  FaSquareFacebook,
  FaSquareInstagram,
  FaSquareTwitter,
} from 'react-icons/fa6'
import img from '../assets/person.png'

import { TypeAnimation } from 'react-type-animation'

const Hero1 = () => {
   const dynamicStyle = {
     backgroundImage: `url(${img})`,
     // Add other dynamic styles as needed
   }
  return (
    <div>
      <section
        id='home'
        className='text-gray-600 pt-28 -mt-20 w-full mx-auto body-font'
      >
        <div className='  flex flex-col-reverse md:grid md:grid-cols-2 md:gap-7 gap-y-20 items-center  px-5 '>
          <div
            data-aos='fade-up'
            data-aos-easing='ease-in-back'
            data-aos-delay='1000'
            className='space-y-7  md:text-left text-center '
          >
            <div className='flex items-center justify-center'>
              <h1 className='lg:text-5xl text-4xl block capitalize text-indigo-600 grid place-items-center font-bold'>
                <TypeAnimation
                  sequence={[`Front-End React Developer 👋🏼 `]}
                  wrapper='span'
                  speed={500}
                />
              </h1>
            </div>

            <p className='mb-8 dark:text-gray-400 md:text-lg leading-relaxed'>
              Hi, I'm Mandip Tamang. A passionate Front-end React Developer
              based in Hetauda, Nepal. 📍
            </p>
          </div>

          <div className='grid w-full place-items-center'>
            <div
              data-aos='fade-left'
              data-aos-delay='1000'
              className={`animate-blob relative bg-cover bg-center bg-no-repeat border border-4 bg-black/20 border-gray-800 rounded-full lg:w-[25rem] lg:h-[25rem] md:w-[20rem] md:h-[20rem] w-[15rem] h-[15rem] transition-all duration-1000 `}
              style={dynamicStyle}
            >
            </div>
          </div>
        </div>

        <div data-aos='fade-up' className='md:flex px-5 mt-7  md:space-x-20 md:space-y-0 space-y-4  w-full text-center  items-center font-semibold text-gray-400'>
          <span className='capitalize md:border-none border-b text-lg'>
            tech stack
            <span className='md:visible invisible'>&nbsp; &nbsp; |</span>
          </span>
          <ul className='cursor-pointer flex justify-center space-x-3'>
            <li>
              <img
                src='https://skillicons.dev/icons?i=html'
                alt='html'
                className='hover:-mt-4 duration-500'
              />
            </li>
            <li>
              <img
                src='https://skillicons.dev/icons?i=js'
                alt='js'
                className='hover:-mt-4 duration-500'
              />
            </li>
            <li>
              <img
                src='https://skillicons.dev/icons?i=css'
                alt='css'
                className='hover:-mt-4 duration-500'
              />
            </li>
            <li>
              <img
                src='https://skillicons.dev/icons?i=react'
                alt='react.js'
                className='hover:-mt-4 duration-500'
              />
            </li>
            <li>
              <img
                src='https://skillicons.dev/icons?i=tailwind'
                alt=''
                className='hover:-mt-4 duration-500'
              />
            </li>
          </ul>
        </div>
      </section>

      <div className='fixed text-3xl md:block hidden left-1 md:top-[35%] lg:top-[40%]'>
        <ul data-aos='fade-right' className='grid gap-y-1'>
          <li>
            <a href='https://www.facebook.com/mandip.tamang.904'>
              <FaSquareFacebook className='text-blue-600 rounded-sm' />
            </a>
          </li>
          <li>
            <a href='https://www.instagram.com/mandiptamang125/?fbclid=IwAR0j9fy-dTalrGd-8t5AOjGUrzEbDRocr_riSo9pEKiIutDztX_RIHb3DNQ'>
              <FaSquareInstagram className='bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 rounded-sm' />
            </a>
          </li>
          <li>
            <a href='https://twitter.com/mandiptamang77'>
              <FaSquareTwitter className='text-blue-700 rounded-sm' />
            </a>
          </li>
          <li>
            <a href='https://www.linkedin.com/in/mandip-tamang-a59624248/'>
              <FaLinkedin className='rounded-sm text-blue-800' />
            </a>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Hero1
