import React from 'react'
import Navbar from '../component/Navbar'
import Banner from '../component/Banner'
import Freebook from '../component/Freebook'
import Footer from '../component/Footer'

function Home() {
  return (
   <>
    <div className='dark:bg-slate-900 dark:text-white'>
    <Navbar />
    <Banner/>
    <Freebook/>
    <Footer/>
    </div>
   </>
  )
}

export default Home