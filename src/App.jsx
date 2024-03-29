import Navbar from './component/Navbar'
import Hero from './component/Hero'
import Footer from './component/Footer'
const App = () => {
  return (
    <div className=' dark:bg-slate-900 w-full bg-gray-50'> 
    <Navbar />
      <div className=' md:w-[80vw] w-[90vw] mx-auto'>
        <Hero />
      </div>
      <div className='dark:bg-gray-700 bg-gray-200'>
        <Footer />
      </div>
    </div>
  )
}

export default App
