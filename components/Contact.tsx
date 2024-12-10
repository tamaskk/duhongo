import React from 'react'
import FacebookIcon from '@mui/icons-material/Facebook';
import EmailIcon from '@mui/icons-material/Email';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';

const Contact = () => {
  return (
    <div className='w-screen h-auto py-20 flex flex-col items-center justify-center'>
        <div className='max-w-[1136px] w-full flex flex-row items-center justify-center gap-10 flex-wrap'>
            <div
                className='w-[300px] cursor-pointer h-[300px] hover:-translate-y-1 transition-all duration-300 bg-blue-600 rounded-md shadow-md shadow-blue-600 flex flex-col items-center justify-around'
            >
                <FacebookIcon className='text-white text-6xl' />
                <p className='text-white text-2xl'>Facebook</p>
            </div>
            <div
                className='w-[300px] cursor-pointer h-[300px] hover:-translate-y-1 transition-all duration-300 bg-white rounded-md shadow-md shadow-white flex flex-col items-center justify-around'
            >
                <LocalPhoneIcon className='text-black text-6xl' />
                <p className='text-black text-2xl'>Facebook</p>
            </div>
            <div
                className='w-[300px] cursor-pointer hover:-translate-y-1 transition-all duration-300 h-[300px] bg-green-600 rounded-md shadow-md shadow-green-600 flex flex-col items-center justify-around'
            >
                <EmailIcon className='text-white text-6xl' />
                <p className='text-white text-2xl'>Email</p>
            </div>
        </div>
    </div>
  )
}

export default Contact