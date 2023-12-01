import moai from '../assets/project/moai.png'
import refract from '../assets/project/refract.png'
import ecommerce from '../assets/project/e-commerce.png'
import tour from '../assets/project/tour.png'



const data = [
  {
    title: 'Contentful CMS',
    url: 'https://react-vite-projects-16-contentful.netlify.app/',
    img: 'https://screenshot-proxy.netlify.app/f_avif,fit_cover,s_336x210/https://d33wubrfki0l68.cloudfront.net/651ceabd6512507bba3d785f/screenshot_2023-10-04-04-32-00-0000.png',
  },
  {
    title: 'Stock Image',
    url: 'https://deft-sawine-f98a98.netlify.app/',
    img: 'https://screenshot-proxy.netlify.app/f_avif,fit_cover,s_336x210/https://d33wubrfki0l68.cloudfront.net/653a7690028f6812fcdd2746/screenshot_2023-10-26-14-24-21-0000.png',
  },
  {
    title: 'E-commerce',
    url: 'https://e-commerce-beige-eta.vercel.app/',
    img: ecommerce,
  },
  {
    title: 'Refract',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, nisi non perspiciatis laborum deleniti harum! Minima sit earum architecto omnis.',
    url: 'https://refract-coral.vercel.app/',
    img: refract,
  },
  {
    title: 'Moai', 
    url: 'https://moai-six.vercel.app/',
    img: moai,
  },
  {
    title: 'Tour',
    url: 'https://tour-vert.vercel.app/',
    img: tour,
  },
]
const Projects = () => {
  return (
    <div className='py-40'>
      <h1
        data-aos='fade-up'
        className='text-3xl dark:text-white text-center font-bold text-gray-800 mb-8'
      >
        Projects
      </h1>
      <div className='py-16 grid  md:grid-cols-2 lg:grid-cols-3 gap-8'>
        {data.map((item) => {
          const { img, title, url} = item
          return (
            <>
              <article
                data-aos='fade-up'
                className='bg-white rounded-lg shadow-md hover:shadow-xl duration-300'
              >
                <img
                  data-aos='fade-up'
                  src={img}
                  alt={title}
                  className='w-full object-cover rounded-t-lg h-64'
                />
                <div data-aos='fade-up' className='capitalize p-8'>
                  <h2 className='text-xl tracking-wide font-medium'>{title}</h2>
                  <p className='mt-4 text-slate-700 text-sm leading-loose'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate, neque.  
                  </p>
                  <div className='mt-4 flex gap-x-4'>
                    <a href={url}>
                      <svg
                        stroke='currentColor'
                        fill='none'
                        stroke-width='2'
                        viewBox='0 0 24 24'
                        stroke-linecap='round'
                        stroke-linejoin='round'
                        className='h-8 w-8 text-slate-500 hover:text-black duration-300'
                        height='1em'
                        width='1em'
                        xmlns='http://www.w3.org/2000/svg'
                      >
                        <path
                          stroke='none'
                          d='M0 0h24v24H0z'
                          fill='none'
                        ></path>
                        <path d='M19.5 7a9 9 0 0 0 -7.5 -4a8.991 8.991 0 0 0 -7.484 4'></path>
                        <path d='M11.5 3a16.989 16.989 0 0 0 -1.826 4'></path>
                        <path d='M12.5 3a16.989 16.989 0 0 1 1.828 4'></path>
                        <path d='M19.5 17a9 9 0 0 1 -7.5 4a8.991 8.991 0 0 1 -7.484 -4'></path>
                        <path d='M11.5 21a16.989 16.989 0 0 1 -1.826 -4'></path>
                        <path d='M12.5 21a16.989 16.989 0 0 0 1.828 -4'></path>
                        <path d='M2 10l1 4l1.5 -4l1.5 4l1 -4'></path>
                        <path d='M17 10l1 4l1.5 -4l1.5 4l1 -4'></path>
                        <path d='M9.5 10l1 4l1.5 -4l1.5 4l1 -4'></path>
                      </svg>
                    </a>
                    <a href='https://github.com/mandiptmg'>
                      <svg
                        stroke='currentColor'
                        fill='currentColor'
                        stroke-width='0'
                        viewBox='0 0 448 512'
                        className='h-8 w-8 text-slate-500 hover:text-black duration-300'
                        height='1em'
                        width='1em'
                        xmlns='http://www.w3.org/2000/svg'
                      >
                        <path d='M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zM277.3 415.7c-8.4 1.5-11.5-3.7-11.5-8 0-5.4.2-33 .2-55.3 0-15.6-5.2-25.5-11.3-30.7 37-4.1 76-9.2 76-73.1 0-18.2-6.5-27.3-17.1-39 1.7-4.3 7.4-22-1.7-45-13.9-4.3-45.7 17.9-45.7 17.9-13.2-3.7-27.5-5.6-41.6-5.6-14.1 0-28.4 1.9-41.6 5.6 0 0-31.8-22.2-45.7-17.9-9.1 22.9-3.5 40.6-1.7 45-10.6 11.7-15.6 20.8-15.6 39 0 63.6 37.3 69 74.3 73.1-4.8 4.3-9.1 11.7-10.6 22.3-9.5 4.3-33.8 11.7-48.3-13.9-9.1-15.8-25.5-17.1-25.5-17.1-16.2-.2-1.1 10.2-1.1 10.2 10.8 5 18.4 24.2 18.4 24.2 9.7 29.7 56.1 19.7 56.1 19.7 0 13.9.2 36.5.2 40.6 0 4.3-3 9.5-11.5 8-66-22.1-112.2-84.9-112.2-158.3 0-91.8 70.2-161.5 162-161.5S388 165.6 388 257.4c.1 73.4-44.7 136.3-110.7 158.3zm-98.1-61.1c-1.9.4-3.7-.4-3.9-1.7-.2-1.5 1.1-2.8 3-3.2 1.9-.2 3.7.6 3.9 1.9.3 1.3-1 2.6-3 3zm-9.5-.9c0 1.3-1.5 2.4-3.5 2.4-2.2.2-3.7-.9-3.7-2.4 0-1.3 1.5-2.4 3.5-2.4 1.9-.2 3.7.9 3.7 2.4zm-13.7-1.1c-.4 1.3-2.4 1.9-4.1 1.3-1.9-.4-3.2-1.9-2.8-3.2.4-1.3 2.4-1.9 4.1-1.5 2 .6 3.3 2.1 2.8 3.4zm-12.3-5.4c-.9 1.1-2.8.9-4.3-.6-1.5-1.3-1.9-3.2-.9-4.1.9-1.1 2.8-.9 4.3.6 1.3 1.3 1.8 3.3.9 4.1zm-9.1-9.1c-.9.6-2.6 0-3.7-1.5s-1.1-3.2 0-3.9c1.1-.9 2.8-.2 3.7 1.3 1.1 1.5 1.1 3.3 0 4.1zm-6.5-9.7c-.9.9-2.4.4-3.5-.6-1.1-1.3-1.3-2.8-.4-3.5.9-.9 2.4-.4 3.5.6 1.1 1.3 1.3 2.8.4 3.5zm-6.7-7.4c-.4.9-1.7 1.1-2.8.4-1.3-.6-1.9-1.7-1.5-2.6.4-.6 1.5-.9 2.8-.4 1.3.7 1.9 1.8 1.5 2.6z'></path>
                      </svg>
                    </a>
                  </div>
                </div>
              </article>
            </>
          )
        })}
      </div>
    </div>
  )
}

export default Projects
