import Footer from '@/components/Footer'
import Nav from '@/components/Nav'
import Table from '@/components/Table'
import React from 'react'

const arak = () => {
  const firstRender = React.useRef(true)
  const [prices, setPrices] = React.useState<any>()

  React.useEffect(() => {
    if (firstRender.current) {
      firstRender.current = false
      getPrices()
      return
    }
  }, [])

  const getPrices = async () => {
    try {
      const res = await fetch('/api/prices')
      if (!res.ok) {
        throw new Error('Failed to fetch prices')
      }
      const data = await res.json()
      setPrices(data.prices)
    } catch (err) {
      console.error(err)
    }
  };


  return (
    <div className='bg-black'>
      <Nav />
      <h1 className='text-center mt-20 text-3xl font-bold mb-10'>
        Áraink és szolgáltatásaink
      </h1>
      <div className=''>
      <Table 
        prices={prices}
      />
      <Footer />
      </div>
    </div>
  )
}

export default arak