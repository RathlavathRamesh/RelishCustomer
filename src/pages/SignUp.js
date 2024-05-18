import React, { useState } from 'react'
import Image from "next/image";
import { useRouter } from 'next/router';

const SignIn = () => {
    const [showPassword,setChangeShowPassword]=useState(false)
    const router=useRouter();
    const changeShowPassword=()=>{
        setChangeShowPassword(!showPassword);
    }
    const SignUpProcess=()=>{
       router.replace("/SignUpProcess")
    }
    return (
        <div className='bg-[#FAFBFF] w-[100%] flex flex-col items-center  p-0 h-auto min-h-screen bg-cover absolute'
        style={{ backgroundImage: "url('https://res.cloudinary.com/dnovcmruv/image/upload/v1715617620/Pattern_1_v6q46x.png')" }}>
            <div className='h-[45vh] flex flex-col justify-center items-center pt-[4rem]'>
              <Image src="https://res.cloudinary.com/dnovcmruv/image/upload/v1715619648/image_45_wlwmrr.png" alt="Description of the image" className="top-[20rem]" width={182} height={192} />
            </div>
            <h1 className="w-[241px] h-[26px] absolute top-[21rem] left-[67px]
                font-montserrat text-[20px] font-extrabold leading-[26.2px] text-center
                text-[#09051C]">Sign Up For Free </h1>
            <div className='flex flex-col items-center'>
            <div  className="mt-4 top-96 flex flex-row justify-between  text-[#3B3B3B] h-[3rem] rounded-xl shadow-md p-4 w-[287px] left-[3rem]  w-42 h-17 absolute top-398 left-53  leading-[17.07px] tracking-[0.5px] text-left
              placeholder-[#3B3B3B]">
                <div className='flex flex-row items-center'>
                    <img src='https://res.cloudinary.com/dnovcmruv/image/upload/v1715702475/Profile_sbwfyj.png' className='h-[3vh] w-[5vw]'/>
                    <input type='text' className='border-none outline-none mt-1.5 ml-2 text-[#3B3B3B]  font-montserrat text-xs font-normal leading-[17.07px] tracking-[0.5px] opacity-30' placeholder='Anamwp . . |'/>
                </div>
            </div>
            <div  className="mt-20 top-96 flex flex-row justify-between  text-[#3B3B3B] h-[3rem] rounded-xl shadow-md p-4 w-[287px] left-[3rem]  w-42 h-17 absolute top-398 left-53  leading-[17.07px] tracking-[0.5px] text-left
              placeholder-[#3B3B3B]">
                <div className='flex flex-row items-center'>
                    <img src='https://res.cloudinary.com/dnovcmruv/image/upload/v1715702475/Profile_sbwfyj.png' className='h-[3vh] w-[5vw]'/>
                    <input type='text' className='border-none outline-none mt-1.5 ml-2 text-[#3B3B3B]  font-montserrat text-xs font-normal leading-[17.07px] tracking-[0.5px] opacity-30' placeholder='Email'/>
                </div>
            </div>
            <div  className="mt-36 top-96 flex flex-row justify-between  text-[#3B3B3B] h-[3rem] rounded-xl shadow-md p-4 w-[287px] left-[3rem]  w-42 h-17 absolute top-398 left-53  leading-[17.07px] tracking-[0.5px] text-left
              placeholder-[#3B3B3B]">
                <div className='flex flex-row items-center'>
                    <img src='https://res.cloudinary.com/dnovcmruv/image/upload/v1715703561/Lock_exoef8.png' className='h-[3vh] w-[5vw]'/>
                    <input type={showPassword?'text':'password'} className='border-none outline-none mt-1.5 ml-2 text-[#3B3B3B]  font-montserrat text-xs font-normal leading-[17.07px] tracking-[0.5px] opacity-30' placeholder='Password'/>
                </div>
                <img src='https://res.cloudinary.com/dnovcmruv/image/upload/v1715703806/Show_rciumu.png' alt='ShowImage' className='h-[3vh] w-[5vw]' onClick={changeShowPassword}/>
            </div>
            </div>
            <div className='top-398 mt-[16rem]  ml-[1.5rem] mb-0 flex flex-row self-start text-black '>
                <img src='https://res.cloudinary.com/dnovcmruv/image/upload/v1715705530/Check_List_Icon_z0nguw.png' alt='checkList' className=' absolute w-[20vw]'/>
                <p className=' font-montserrat text-xs font-medium leading-[19.98px] absolute mt-[1rem] left-[3.6rem]'>Keep Me Signed In</p>
            </div>
            <div className='top-398 mt-[1.5rem] ml-[1.5rem] mb-0 flex flex-row self-start text-black '>
                <img src='https://res.cloudinary.com/dnovcmruv/image/upload/v1715705530/Check_List_Icon_z0nguw.png' alt='checkList' className=' absolute w-[20vw]'/>
                <p className=' font-montserrat text-xs font-medium leading-[19.98px] absolute mt-[1rem] left-[3.6rem]'>Email Me About Special Pricing</p>
            </div>
            <div className="text-center">
            <button className=' w-44 h-12 mt-[4rem] rounded-2xl font-montserrat text-[16px] font-bold leading-[20.96px]  text-[#ffffff] bg-[#B2AC88]' onClick={SignUpProcess} >Create Account</button>
            </div>
            <p className="text-[#B2AC88] text-[12px] underline text-center mt-[1.5rem]">already have an account?</p>
        </div>
  )
}

export default SignIn
