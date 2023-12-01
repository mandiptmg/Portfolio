import image from '../assets/m-low-resolution-logo-color-on-transparent-background.png'
// import { NavLink } from 'react-router-dom'
import 'animate.css'
import { useEffect, useState } from 'react'
import { FaBars } from 'react-icons/fa6'
import { FaTimes } from 'react-icons/fa'
import { BsFillMoonStarsFill, BsFillSunFill } from 'react-icons/bs'
import { useGlobalContext } from '../context/context'

const Navbar = () => {
  const { active, setActive } = useGlobalContext()
  const [toogle, setToogle] = useState(false)
  //load dark mode local storage
  useEffect(() => {
    const storedValue = localStorage.getItem('dark-mode')
    if (storedValue === 'true') {
      setToogle(true)
      document.documentElement.classList.add('dark')
    } else {
      setToogle(false)
    }
  }, [])

  const navlink = [
    { title: 'home', href: '#home' },
    { title: 'about me', href: '#about me' },
    { title: 'projects', href: '#projects' },
    { title: 'contact', href: '#contact' },
  ]
  return (
    <>
      <div className='h-[5rem] z-20 grid sticky backdrop-blur-md top-0 z-10 '>
        <div className='flex items-center justify-between'>
          <div className='flex gap-x-2  items-center'>
            <a href='/'>
              <img
                data-aos='fade-right'
                src={image}
                alt='logo'
                className='w-9   h-9 rounded-full'
              />
            </a>
            <h1
              data-aos='fade-right'
              data-aos-delay='1000'
              className='text-gray-600 
             duration-500  text-lg dark:text-white'
            >
              Mandip&nbsp;
              <span className='capitalize text-indigo-900 font-semibold'>
                | developer
              </span>
            </h1>
          </div>
          <div
            data-aos='fade-down'
            className='flex items-center gap-5 lg:gap-10'
          >
            {navlink.map((item, index) => {
              const { title, href } = item
              return (
                <ul className='text-lg dark:text-white hidden md:block capitalize text-gray-600 hover:text-indigo-800'>
                  <li key={index}>
                    <a href={href}>{title}</a>
                  </li>
                </ul>
              )
            })}
          </div>
          <div data-aos='fade-left'>
            <button
              onClick={() => {
                setToogle(!toogle)
                if (toogle === true) {
                  document.documentElement.classList.remove('dark')
                  localStorage.setItem('dark-mode', !toogle)
                } else {
                  document.documentElement.classList.add('dark')
                  localStorage.setItem('dark-mode', !toogle)
                }
              }}
              title={toogle ? 'light mode on' : 'night mode on'}
              className='mr-5  md:mr-0'
            >
              {toogle ? (
                <BsFillSunFill className='text-yellow-600' />
              ) : (
                <BsFillMoonStarsFill />
              )}
            </button>

            <button
              onClick={() => setActive(!active)}
              className='md:hidden text-xl '
            >
              {active ? (
                <FaTimes className='text-2xl text-red-600 duration-300 transition-all hover:scale-105 hover:text-red-800 ' />
              ) : (
                <FaBars className='hover:rotate-90 hover:text-indigo-900  text-indigo-700  transition-all duration-300 ' />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* //close and open menu */}

      <div
        className={
          active ? ' fixed dark:bg-slate-900 bg-white top-0 left-0 z-10 w-full h-full' : 'hidden'
        }
      >
        <div className='grid mt-40 place-items-center'>
          <div className='grid gap-y-14'>
            {navlink.map((item, index) => {
              const { title, href } = item
              return (
                <ul className='text-4xl dark:text-white text-center capitalize text-gray-600  hover:text-indigo-800'>
                  <li key={index} className='hover:text-indigo-600'>
                    <a href={href} onClick={() => setActive(false)}>
                      {title}
                    </a>
                  </li>
                </ul>
              )
            })}
          </div>
        </div>
      </div>
    </>
  )
}

export default Navbar
