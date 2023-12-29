import img from '../assets/3d-casual-life-smiling-man-wearing-headset-with-microphone.png'
const About = () => {
  return (
    <div>
      <section className='w-full grid place-items-center lg:h-[90vh] text-gray-600'>
        <div className=' lg:py-0 py-28 grid lg:grid-cols-2  place-items-center'>
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
              and visually appealing websites. Proficient{' '}
              <span className='text-indigo-600'>
                HTML, CSS, and JavaScript,{' '}
              </span>
              I create seamless user interfaces. My toolkit includes modern
              libraries like <span className='text-indigo-600'>React</span> and
              styling with <span className='text-indigo-600'>Tailwind CSS</span>{' '}
              . With a strong commitment to user experience, I merge creativity
              and technical expertise to bring web projects to life. Check out
              my portfolio to see my work.
            </p>
           
          </div>
        </div>
      </section>
    </div>
  )
}

export default About
