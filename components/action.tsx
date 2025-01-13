import React from 'react'

const Action = () => {
    const isVisible = false

  return (
    <div className={`w-screen ${!isVisible && 'hidden'} h-[40px] flex flex-col items-center justify-center bg-red-400`}>action</div>
  )
}

export default Action