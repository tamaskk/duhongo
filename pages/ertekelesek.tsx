import Footer from '@/components/Footer'
import Nav from '@/components/Nav'
import Reviews from '@/components/Reviews'
import React from 'react'

const ertekelesek = () => {
  return (
    <div className="flex flex-col items-center justify-between min-h-screen overflow-y-auto overflow-x-hidden bg-black">
      <Nav />
      <Reviews />
      <Footer />
    </div>
  )
}

export default ertekelesek