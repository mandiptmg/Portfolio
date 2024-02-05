import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
  FaWhatsapp,
} from 'react-icons/fa6'
import { MdOutlineMail } from 'react-icons/md'

const Contact = () => {
  return (
    <>
      <section className='text-gray-600 body-font py-28 relative'>
        <div className='px-5 py-18 mx-auto'>
          <div className=' flex flex-col text-center w-full mb-12'>
            <h1
              data-aos='fade-up'
              className='sm:text-3xl text-2xl font-bold title-font mb-4 text-gray-900 uppercase  dark:text-white'
            >
              get in <span className='text-indigo-600'>touch</span>
            </h1>
            <p
              data-aos='fade-up'
              className='lg:w-2/3 mx-auto leading-relaxed text-base'
            >
              I welcome the opportunity to connect and discuss potential
              collaborations, projects, or any inquiries you may have.
            </p>
          </div>
          <div data-aos='fade-up' className='lg:w-1/2 md:w-2/3 mx-auto'>
            <div>
              <form
                action='https://getform.io/f/014c7187-b8e7-405c-9ddd-21ac63fe7610'
                method='POST'
                className='md:flex grid  max-w-2xl w-full mx-auto flex-wrap -m-2'
              >
                <div className='p-2 md:w-1/2 w-full'>
                  <div className='relative '>
                    <label
                      htmlFor='name'
                      className='leading-7 w-full text-sm text-gray-600'
                    >
                      Full Name
                    </label>
                    <input
                      required
                      placeholder='Enter your full name '
                      type='text'
                      id='name'
                      name='name'
                      className='w-full bg-gray-100 bg-opacity-50  rounded border border-gray-300 focus:border-indigo-500 
                      dark:border-none
                      dark:focus:placeholder-gray-400
                      dark:placeholder-gray-300
                      focus:bg-white focus:ring-2
                       focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out'
                    />
                  </div>
                </div>
                <div className='p-2 md:w-1/2 w-full'>
                  <div className='relative'>
                    <label
                      htmlFor='email'
                      className='leading-7 text-sm text-gray-600'
                    >
                      Email
                    </label>
                    <input
                      required
                      placeholder='Enter your email address'
                      type='email'
                      id='email'
                      name='email'
                      className='w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300  
                      dark:border-none
                      dark:focus:placeholder-gray-400
                      dark:placeholder-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out'
                    />
                  </div>
                </div>
                <div className='p-2 w-full'>
                  <div className='relative'>
                    <label
                      htmlFor='message'
                      className='leading-7 text-sm text-gray-600'
                    >
                      Message
                    </label>
                    <textarea
                      id='message'
                      placeholder='Message...'
                      required
                      name='message'
                      className='w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 
                     dark:border-none
                      dark:focus:placeholder-gray-400
                      dark:placeholder-gray-300  transition-colors duration-200 ease-in-out'
                    ></textarea>
                  </div>
                </div>
                <div className='p-2 text-center w-full'>
                  <button
                    data-aos='fade-up'
                    type='submit'
                    className='relative hover:shadow-2xl hover:shadow1 button1 overflow-hidden font-medium text-white transition-all duration-700 px-4 py-2 bg-indigo-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600'
                  >
                    <div className='flex items-center'>
                      <div className='w-8 h-8 p-1 mr-2 duration-700 svg-wrapper rounded-full'>
                        <svg
                          className='w-full h-full text-white'
                          xmlns='http://www.w3.org/2000/svg'
                          viewBox='0 0 24 24'
                        >
                          <path fill='none' d='M0 0h24v24H0z'></path>
                          <path
                            fill='currentColor'
                            d='M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z'
                          ></path>
                        </svg>
                      </div>
                      <span className='transition-all span1 text-lg  duration-700'>
                        Send
                      </span>
                    </div>
                  </button>
                </div>
              </form>
              <div
                data-aos='fade-up'
                className='p-2 pt-8 w-full mt-8 border-t border-gray-200 text-center'
              >
                <div className='grid place-items-center gap-y-2'>
                  <button
                    onClick={() =>
                      window.open(
                        'https://mail.google.com/mail/u/0/#inbox?compose=CllgCJTNHXPchjWXShWGSlnhFMcqhNzbVWJgKJqJbzctTbBMGKpNJKTfdKMPWwzNnnnVDLRPXnq'
                      )
                    }
                    className='flex items-center gap-1 text-gray-400 hover:text-indigo-500 '
                  >
                    <span>
                      <MdOutlineMail className='text-2xl text-red-400 cursor-pointer  ' />
                    </span>
                    <span>mandiptamang125@gmail.com</span>
                  </button>{' '}
                  <button
                    onClick={() => window.open('https://wa.me/9809118069')}
                    className='flex items-center cursor-pointer hover:text-green-400  gap-1 text-gray-400  '
                  >
                    <FaWhatsapp className='text-2xl  text-green-400' />
                    <span>+977 9809118069</span>
                  </button>
                </div>

                <span className='justify-center items-center my-6 flex '>
                  <button
                    onClick={() =>
                      window.open('https://twitter.com/mandiptamang77')
                    }
                    className='text-gray-500'
                  >
                    <FaTwitter className='w-5 h-5' />
                  </button>
                  <button
                    onClick={() =>
                      window.open('https://www.facebook.com/mandip.tamang.904')
                    }
                    className='ml-4 text-gray-500'
                  >
                    <FaFacebook className='w-5 h-5' />
                  </button>
                  <button
                    onClick={() =>
                      window.open(
                        'https://www.instagram.com/mandiptamang125/?fbclid=IwAR0j9fy-dTalrGd-8t5AOjGUrzEbDRocr_riSo9pEKiIutDztX_RIHb3DNQ'
                      )
                    }
                    className='ml-4 text-gray-500'
                  >
                    <FaInstagram className='w-5 h-5' />
                  </button>
                  <button
                    onClick={() =>
                      window.open('https://www.linkedin.com/in/mandip-tamang/')
                    }
                    className='ml-4 text-gray-500'
                  >
                    <FaLinkedin className='w-5 h-5' />
                  </button>
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Contact
