import { useRouter } from 'next/router'
import React, { useState } from 'react'

const ResetPassword = () => {
    const [showPassword,setChangeShowPassword]=useState(false)
    const router=useRouter();
    const changeShowPassword=()=>{
        setChangeShowPassword(!showPassword);
    }
    const GotoSuccessPage=()=>{
        router.replace('/PasswordSuccess')
    }
    return (
        <div className='min-h-screen h-auto opacity-5 absolute w-[100%]  bg-cover bg-[#FEFEFF]'
        style={{ backgroundImage: "url('https://res.cloudinary.com/dnovcmruv/image/upload/v1715617620/Pattern_1_v6q46x.png')", opacity:"15"}}>
           <div className='h-8 w-8 bg-[#F2F1E6] top-10 absolute left-6 flex justify-center items-center rounded-[10px] '>
             <img src='https://res.cloudinary.com/dnovcmruv/image/upload/v1715748776/Vector_j9krmr.png' alt='slicearrow' className='w-[2vw]'/>
             <h1 className="w-64 h-16 text-[#09051C] absolute top-12 left-6 font-montserrat text-[25px] font-bold leading-[32.76px] text-left">
             Reset your password here
             </h1>
             <p className="w-[239px] h-[44px] absolute top-[8rem] left-[25px] text-[#000000]  font-montserrat text-[12px] font-medium leading-[21.66px] text-left">
             Select which contact details should we use to reset your password
            </p>
            </div>
            <div className='flex flex-row items-center'>
                <div  className="mt-20 top-32 flex items-center flex-row justify-between  text-[#3B3B3B] h-[4rem] rounded-xl shadow-xl p-4 w-[287px] left-[3rem]  w-42 h-17 absolute top-398 left-53  leading-[17.07px] tracking-[0.5px] text-left
                placeholder-[#3B3B3B]">
                        <input type={showPassword?'text':'password'} className='border-none outline-none mt-[1rem] ml-2 text-[#3B3B3B]  font-montserrat text-xs font-normal leading-[17.07px] tracking-[0.5px] opacity-30' placeholder='New Password'/>
                        <img src='https://res.cloudinary.com/dnovcmruv/image/upload/v1715703806/Show_rciumu.png' alt='ShowImage' className='h-[3vh] mt-[1vh] w-[5vw]' onClick={changeShowPassword}/>
                  </div>
            </div>
            <div className='flex flex-row items-center'>
                <div  className="mt-24 top-48 flex items-center flex-row justify-between  text-[#3B3B3B] h-16 rounded-xl shadow-xl p-4 w-[287px] left-[3rem]  w-42 h-17 absolute top-398 left-53  leading-[17.07px] tracking-[0.5px] text-left
                placeholder-[#3B3B3B]">
                        <input type={showPassword?'text':'password'} className='border-none outline-none mt-4 ml-2 text-[#3B3B3B]  font-montserrat text-xs font-normal leading-[17.07px] tracking-[0.5px] opacity-30' placeholder='Confirm Password'/>
                        <img src='https://res.cloudinary.com/dnovcmruv/image/upload/v1715703806/Show_rciumu.png' alt='ShowImage' className='h-[3vh] mt-[1vh] w-[5vw] opacity-20' onClick={changeShowPassword}/>
                  </div>
            </div>
            <div className='flex justify-center '>
                <button className=' w-32 h-12 fixed bottom-8  rounded-[15px] font-montserrat text-[16px] font-bold leading-[20.96px]  text-[#ffffff] bg-[#B2AC88]' onClick={GotoSuccessPage}>Next</button>
            </div>
        </div>
      )
}

export default ResetPassword
