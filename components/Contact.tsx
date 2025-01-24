import React from 'react'
import FacebookIcon from '@mui/icons-material/Facebook';
import EmailIcon from '@mui/icons-material/Email';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import { useRouter } from 'next/router';
import tiktok from '../assets/tiktok.webp'

const Contact = () => {
    const router = useRouter()

  return (
    <div className='w-screen h-auto py-20 flex flex-col items-center justify-center'>
        <div className='max-w-[1136px] w-full flex flex-row items-center justify-center gap-10 flex-wrap'>
            <div
                onClick={() => {
                    window.open('https://www.facebook.com/profile.php?id=61567687221152', '_blank')
                }}
                className='w-[250px] cursor-pointer h-[250px] hover:-translate-y-1 transition-all duration-300 bg-blue-600 rounded-md shadow-md shadow-blue-600 flex flex-col items-center justify-around'
            >
                <FacebookIcon className='text-white text-6xl' />
                <p className='text-white text-2xl'>Facebook</p>
            </div>
            <div
            onClick={() => router.push('tel:+36301234567')}
                className='w-[250px] cursor-pointer h-[250px] hover:-translate-y-1 transition-all duration-300 bg-white rounded-md shadow-md shadow-white flex flex-col items-center justify-around'
            >
                <LocalPhoneIcon className='text-black text-6xl' />
                <p className='text-black text-2xl'>Telefon</p>
            </div>
            <div
                onClick={() => router.push('mailto:aduhongotata@gmail.com')}
                className='w-[250px] cursor-pointer hover:-translate-y-1 transition-all duration-300 h-[250px] bg-green-600 rounded-md shadow-md shadow-green-600 flex flex-col items-center justify-around'
            >
                <EmailIcon className='text-white text-6xl' />
                <p className='text-white text-2xl'>Email</p>
            </div>
            <div
                onClick={() => {
                    window.open('https://www.tiktok.com/@aduhongo', '_blank')
                }}
                className='w-[250px] cursor-pointer hover:-translate-y-1 transition-all duration-300 h-[250px] bg-red-600 rounded-md shadow-md shadow-red-600 flex flex-col items-center justify-around'
            >
                <img src={tiktok.src} alt='tiktok' className='w-16 h-16' />
                <p className='text-white text-2xl'>TikTok</p>
            </div>
        </div>
    </div>
  )
}

export default Contact