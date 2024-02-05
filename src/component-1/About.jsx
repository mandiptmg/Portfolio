import img from '../assets/3d-casual-life-smiling-man-wearing-headset-with-microphone.png'
const About = () => {
  return (
    <div>
      <section className='w-full grid place-items-center text-gray-600'>
        <div className=' pb-10 pt-28 grid lg:grid-cols-2  place-items-center'>
          <div className=' w-full mb-10 md:mb-0'>
            <img
              data-aos='fade-right'
              className='object-cover object-center rounded'
              alt='hero'
              src={img}
            />
          </div>

          <div data-aos='fade-left '>
            <h1 className='text-md text-indigo-600 uppercase text-left tracking-widest font-bold '>
              about me
            </h1>
            <h1 className='title-font sm:text-3xl text-2xl dark:text-white mb-4 font-medium text-gray-900'>
              A dedicated Front-End React Developer based in Hetauda, Nepal
            </h1>
            <p className='text-gray-400 md:text-lg leading-relaxed'>
              As a junior front-end developer, I specialize in crafting dynamic
              and visually appealing websites. Proficient in{' '}
              <span className='text-indigo-600'>HTML</span>,{' '}
              <span className='text-indigo-600'>CSS</span>, and{' '}
              <span className='text-indigo-600'>JavaScript</span>, I create
              seamless user interfaces. My toolkit includes modern libraries
              like <span className='text-indigo-600'>React</span> and styling
              with <span className='text-indigo-600'>Tailwind CSS</span>,
              augmented by the power of{' '}
              <span className='text-indigo-600'>Next.js</span> and the type
              safety of <span className='text-indigo-600'>TypeScript</span>.
              With a strong commitment to user experience, I merge creativity
              and technical expertise to bring web projects to life. Check out
              my projects on <span className='text-indigo-600'>GitHub</span> to
              see my work.
            </p>

            <button
              onClick={() =>
                window.open(
                  'https://drive.google.com/file/d/1dw-XIinbBwSHvBkUXudVddQ2O72FZrWW/view'
                )
              }
              className='rounded px-3 py-2 flex gap-2 items-center mt-4 text-white hover:bg-indigo-500 bg-indigo-600 text-base capitalize font-semibold md:text-lg'
            >
              <svg
                className=''
                xmlns='http://www.w3.org/2000/svg'
                height='16'
                width='20'
                viewBox='0 0 640 512'
              >
                <path
                  d='M144 480C64.5 480 0 415.5 0 336c0-62.8 40.2-116.2 96.2-135.9c-.1-2.7-.2-5.4-.2-8.1c0-88.4 71.6-160 160-160c59.3 0 111 32.2 138.7 80.2C409.9 102 428.3 96 448 96c53 0 96 43 96 96c0 12.2-2.3 23.8-6.4 34.6C596 238.4 640 290.1 640 352c0 70.7-57.3 128-128 128H144zm79-167l80 80c9.4 9.4 24.6 9.4 33.9 0l80-80c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-39 39V184c0-13.3-10.7-24-24-24s-24 10.7-24 24V318.1l-39-39c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9z'
                  fill='white'
                ></path>
              </svg>
              <span> Resume</span>
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About
