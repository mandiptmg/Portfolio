import { FaChevronCircleUp } from 'react-icons/fa'
import img from '../assets/m-low-resolution-logo-color-on-transparent-background.png'
const Footer = () => {
  return (
    <div>
      <footer className='relative mt-16 md:mt-0 '>
        <div className=' w-full max-w-screen-xl mx-auto p-4 md:py-8'>
          <div className='sm:flex sm:items-center sm:justify-between'>
            <a href='#home' className='flex items-center mb-4 sm:mb-0'>
              <img src={img} className='h-8 mr-3' alt='mandip Logo' />
              <span className='self-center text-gray-500 text-2xl font-semibold whitespace-nowrap dark:text-white'>
                Mandip{' '}
              </span>
            </a>
            <ul className='flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400'>
              <li>
                <a href='#about me' className='mr-4 hover:underline md:mr-6 '>
                  About
                </a>
              </li>
              <li>
                <a href='#projects' className='mr-4 hover:underline md:mr-6 '>
                  Project
                </a>
              </li>
              <li>
                <a href='#contact' className='hover:underline'>
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <hr className='my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8' />
          <span className='block text-sm text-gray-500 sm:text-center dark:text-gray-400'>
            © 2023{' '}
            <a href='#home' className='hover:underline'>
              Mandip
            </a>
            . All Rights Reserved.
          </span>
        </div>
        <button title='Home' className='text-3xl '>
          <a href='#home'>
            <FaChevronCircleUp className='absolute bottom-10 right-14 text-indigo-600 hover:scale-105 transition-all duration-700 animate-bounce ' />
          </a>
        </button>
      </footer>
    </div>
  )
}

export default Footer
