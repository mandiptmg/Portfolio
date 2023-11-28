import {FaLinkedin, FaSquareFacebook, FaSquareInstagram, FaSquareTwitter } from 'react-icons/fa6'
import img from '../assets/person.png'
import { TypeAnimation } from 'react-type-animation'
const Hero1 = () => {
  return (
    <div>
      <section
        id='home'
        className='text-gray-600 w-full body-font'
      >
        <div className='mx-auto w-full  grid md:grid-cols-2 gap-7 items-center px-5 py-28'>
          <div
            data-aos='fade-right'
            data-aos-easing='ease-in-back'
            data-aos-delay='1000'
            className=' text-center '
          >
            <h5 className='mb-4 font-medium text-gray-900 dark:text-white'>
              Hey, I am
              <span className='text-2xl lg:text-5xl md:text-3xl block capitalize text-indigo-600 font-bold'>
                <TypeAnimation
                  sequence={['mandip tamang  ']}
                  wrapper='span'
                  speed={500}
                  repeat={2}
                />
              </span>
            </h5>
            <p className='mb-8 leading-relaxed'>
              I'm a passionate
              <span className='text-indigo-600'> front-end developer </span>
              with a flair for crafting captivating web experiences. Proficient
              in{' '}
              <span className='text-indigo-600'>
                HTML, CSS, JavaScript, React, and Tailwind.
              </span>
              I blend creativity with technical expertise to bring websites to
              life, making user interactions seamless and visually appealing.
            </p>
            <div className='flex justify-center'>
              <button className='inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded capitalize text-lg'>
                <a href='#contact'>contact me</a>
              </button>
            </div>
          </div>
          <div data-aos='fade-left' data-aos-delay='1000'>
            <img
              className='object-cover md:block hidden rounded-2xl w-full  drop-shadow-2xl object-center rounded'
              alt='hero'
              src={img}
            />
          </div>
        </div>
      </section>
      <div className='fixed w-full h-full text-3xl md:block hidden left-1 md:top-[35%] lg:top-[40%]'>
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
