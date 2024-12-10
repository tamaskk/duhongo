import Footer from '@/components/Footer'
import Nav from '@/components/Nav'
import React from 'react'

const idopont = () => {
  return (
    <div className="flex flex-col items-center justify-between min-h-screen overflow-y-auto overflow-x-hidden bg-black">
      <Nav />
      <Footer />
    </div>
  )
}

export default idopont