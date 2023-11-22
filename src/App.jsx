import Navbar from './component/Navbar'
import Hero from './component/Hero'
import Footer from './component/Footer'
const App = () => {
  return (
    <div className=' dark:bg-slate-900 bg-white'>
      <div className=' md:w-[80vw] w-[90vw] mx-auto'>
        <Navbar />
        <Hero />
      </div>
      <div className='dark:bg-gray-700 bg-[#f1f1f1]'>
        <Footer />
      </div>
    </div>
  )
}

export default App
