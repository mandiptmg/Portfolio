import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa6'
import 'animate.css'

const Contact = () => {
  return (
    <>
      <section className='text-gray-600 body-font py-28 relative'>
        <div className='px-5 py-18 mx-auto'>
          <div className=' flex flex-col text-center w-full mb-12'>
            <h1 className='sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900 dark:text-white'>
              Contact Us
            </h1>
            <p className='lg:w-2/3 mx-auto leading-relaxed text-base'>
              Feel free to get in touch with us for any inquiries or assistance
              you need.
            </p>
          </div>
          <div className='lg:w-1/2 md:w-2/3 mx-auto'>
            <div className='flex flex-wrap -m-2'>
              <div className='p-2 w-1/2'>
                <div className='relative'>
                  <label
                    htmlFor='name'
                    className='leading-7 text-sm text-gray-600'
                  >
                    Name
                  </label>
                  <input
                    type='text'
                    id='name'
                    name='name'
                    className='w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out'
                  />
                </div>
              </div>
              <div className='p-2 w-1/2'>
                <div className='relative'>
                  <label
                    htmlFor='email'
                    className='leading-7 text-sm text-gray-600'
                  >
                    Email
                  </label>
                  <input
                    type='email'
                    id='email'
                    name='email'
                    className='w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out'
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
                    name='message'
                    className='w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out'
                  ></textarea>
                </div>
              </div>
              <div className='p-2 w-full'>
                <button className='flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg uppercase tracking-wider'>
                  send
                </button>
              </div>
              <div className='p-2 w-full pt-8 mt-8 border-t border-gray-200 text-center'>
                <a href='https://mail.google.com/' className='text-indigo-500'>
                  example@email.com
                </a>
                <span className='block justify-center items-center my-6 flex '>
                  <a
                    href='https://twitter.com/mandiptamang77'
                    className='text-gray-500'
                  >
                    <FaTwitter className='w-5 h-5' />
                  </a>
                  <a
                    href='https://www.facebook.com/mandip.tamang.904'
                    className='ml-4 text-gray-500'
                  >
                    <FaFacebook className='w-5 h-5' />
                  </a>
                  <a
                    href='https://www.instagram.com/mandiptamang125/?fbclid=IwAR0j9fy-dTalrGd-8t5AOjGUrzEbDRocr_riSo9pEKiIutDztX_RIHb3DNQ'
                    className='ml-4 text-gray-500'
                  >
                    <FaInstagram className='w-5 h-5' />
                  </a>
                  <a
                    href='https://www.linkedin.com/in/mandip-tamang-a59624248/'
                    className='ml-4 text-gray-500'
                  >
                    <FaLinkedin className='w-5 h-5' />
                  </a>
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