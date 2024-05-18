import React from 'react'
import OtpContainer from './components/OtpContainer'
import { useRouter } from 'next/router'

const VerificationPage = () => {
   const router=useRouter();
  const CallForgotPassword=()=>{
     router.replace('/ForgotPassword')
  }
  return (
    <div className='max-h-screen h-auto opacity-5 absolute w-[100%]  bg-cover bg-[#FEFEFF]'
    style={{ backgroundImage: "url('https://res.cloudinary.com/dnovcmruv/image/upload/v1715617620/Pattern_1_v6q46x.png')", opacity:"15"}}
    >
       <div className='h-[2rem] w-[2rem] bg-[#F2F1E6] top-[2.5rem] absolute left-[1.5rem] flex justify-center items-center rounded-[10px] '>
         <img src='https://res.cloudinary.com/dnovcmruv/image/upload/v1715748776/Vector_j9krmr.png' alt='slicearrow' className='w-[2vw]'/>
         <h1 className="w-[264px] h-[66px] text-[#09051C] absolute top-[3rem] left-[1.5rem] font-montserrat text-[25px] font-bold leading-[32.76px] text-left">
         Enter 4-digit Verification code 
         </h1>
         <p className="w-64 h-11 absolute top-28 left-[25px] text-[#000000]  font-montserrat text-[12px] font-medium leading-[21.66px] text-left">
         Code send to +6282045**** . This code will expired in 01:30
        </p>
        </div>
        <div className=' h-screen flex items-center justify-center'> <OtpContainer/></div>
         
        <div className='text-center'>
        <button type='button' className=' w-36 h-12
          rounded-[15px] mt-8  font-montserrat text-[16px] font-bold  leading-[20.96px]  text-[#ffffff] bg-[#B2AC88]' onClick={CallForgotPassword}>Next</button>
        </div>
    </div>
  )
}

export default VerificationPage
