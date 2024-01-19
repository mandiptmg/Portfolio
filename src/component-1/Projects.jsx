import { useState } from 'react'
import data from './data/data'
import { FaGithub } from 'react-icons/fa'
import { TbWorldWww } from 'react-icons/tb'

const Projects = () => {
  const [showAll, setShowAll] = useState(false)

  return (
    <div className='w-full h-full'>
      <div>
        <h1
          data-aos='fade-up'
          className='text-3xl dark:text-white text-center pt-24 mb-16 font-bold text-gray-800'
        >
          Projects
        </h1>

        <div className='grid w-full place-items-end'>
          <button
            className='  -mt-4 dark:text-white mb-4 text-sm md:text-lg font-semibold  underline hover:no-underline'
            onClick={() => setShowAll(!showAll)}
          >
            {showAll ? 'Show Less' : 'Show More'}
          </button>
        </div>
      </div>
      <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
        {data
          .map((item, index) => {
            const { img, title, url, desc, github } = item
            return (
              <article
                key={index}
                data-aos='fade-up'
                className='bg-white/60 dark:bg-slate-950/50 w-full rounded-lg shadow-md group hover:shadow-xl duration-300'
              >
                <div className='relative group'>
                  <img
                    data-aos='fade-up'
                    src={img}
                    alt={title}
                    className='w-full object-cover rounded-t-lg h-64'
                  />
                  <div className='absolute top-0 bg-black/80 opacity-0 duration-700 group-hover:opacity-100 grid place-items-center w-full h-full '>
                    <div className='flex text-3xl text-slate-400 gap-x-4'>
                      <button
                        title='Live Demo'
                        className='hover:text-white'
                        onClick={() => window.open(url)}
                      >
                        <TbWorldWww />
                      </button>
                      <button
                        title='Github'
                        className='hover:text-white'
                        onClick={() => window.open(github)}
                      >
                        <FaGithub />
                      </button>
                    </div>
                  </div>
                </div>
                <div data-aos='fade-up' className='capitalize py-2 px-4'>
                  <h2 className='text-xl text-gray-600 dark:text-white tracking-wide font-medium'>
                    {title}
                  </h2>
                  <p className='mt-4 text-slate-700 dark:text-white text-sm leading-loose'>
                    {desc}
                  </p>
                </div>
              </article>
            )
          })
          .slice(0, showAll ? data.length : -2)}
      </div>
    </div>
  )
}

export default Projects
