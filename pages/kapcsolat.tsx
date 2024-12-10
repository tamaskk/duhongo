import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import Nav from '@/components/Nav'
import React from 'react'

const kapcsolat = () => {
  return (
    <div className='bg-black'>
      <Nav />
      <h1 className='text-3xl font-bold text-center mt-20'>
        Kérdésed van? Kíváncsi vagy a részletekre?
      </h1>
      <p className='text-center font-semibold text-xl mt-5'>
        Lépj velünk kapcsolatba!
      </p>
      <Contact />
      <Footer />
    </div>
  )
}

export default kapcsolat