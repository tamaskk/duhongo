import Footer from '@/components/Footer'
import Nav from '@/components/Nav'
import Table from '@/components/Table'
import React from 'react'

const arak = () => {
  return (
    <div className='bg-black'>
      <Nav />
      <h1 className='text-center mt-20 text-3xl font-bold mb-10'>
        Áraink és szolgáltatásaink
      </h1>
      <div className=''>
      <Table />
      <Footer />
      </div>
    </div>
  )
}

export default arak