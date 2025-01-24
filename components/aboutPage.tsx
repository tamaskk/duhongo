import React, { useEffect, useRef, useState } from 'react'

const AboutPage = () => {
    const firstRender = useRef(true);
    const [about, setAbout] = useState<any[]>([]);
  
    useEffect(() => {
      if (firstRender.current) {
        firstRender.current = false;
        getAbout();
        return;
      }
    }, []);
  
    const getAbout = async () => {
      const response = await fetch("/api/about");
      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.message || "Failed to fetch about");
      }
      setAbout(data.about);
    }

  return (
    <div className='w-screen h-fit py-5 bg-black flex flex-col items-center justify-start'>
        <div className='max-w-[1163px] overflow-hidden flex flex-col items-center justify-start gap-10'>
            {
                about.map((item: any, index: number) => (
                    item.type === 'image' ?
                    <div key={index} className='flex flex-col items-center justify-start w-full'>
                        <img src={item.imageUrl} alt={item.title} className='w-full max-h-[500px]' />
                    </div>
                    :
                    <div key={index} className='flex flex-col items-center justify-start w-full'>
                        <h2 className='text-3xl font-bold text-white'>{item.title}</h2>
                        <p className='text-white'>{item.text}</p>
                    </div>
                ))
            }
        </div>
    </div>
  )
}

export default AboutPage