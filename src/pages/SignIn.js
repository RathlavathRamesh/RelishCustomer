import Image from "next/image";
import { useRouter } from "next/router";
import React from 'react'

const LoginPage = () => {
    const router=useRouter();
  const LoginFuntion=()=>{
     router.replace('/SignUp')
  }
  return (
    <div className='bg-[#FAFBFF] min-h-screen h-auto bg-cover'
    style={{ backgroundImage: "url('https://res.cloudinary.com/dnovcmruv/image/upload/v1715617620/Pattern_1_v6q46x.png')" }}
    >
        <div className='h-[45vh] flex flex-col justify-center items-center pt-[4rem]'>
          <Image src="https://res.cloudinary.com/dnovcmruv/image/upload/v1715619648/image_45_wlwmrr.png" alt="Description of the image" className="top-[20rem]" width={182} height={192} />
        </div>
        <h1  className="
            w-[241px] h-[26px] absolute top-[21rem] left-[67px]
            font-montserrat text-[20px] font-extrabold leading-[26.2px] text-center
            text-[#09051C]
          ">Login To Your Account</h1>
        <input type="text"
          className="mt-[4rem] text-[#3B3B3B] h-[3rem] rounded-xl outline-none shadow-md p-4 w-[287px] left-[3rem]  w-42 h-17 absolute top-398 left-53  opacity-30
          font-montserrat text-xs font-normal leading-[17.07px] tracking-[0.5px] text-left
          placeholder-[#3B3B3B]"
          placeholder="Email" />
        <input type="text"
          className="mt-[8rem] text-[#3B3B3B] h-[3rem] rounded-xl outline-none shadow-md p-4 w-[287px] left-[3rem]  w-42 h-17 absolute top-398 left-53  opacity-30
          font-montserrat text-xs font-normal leading-[17.07px] tracking-[0.5px] text-left
          placeholder-[#3B3B3B]"
          placeholder="password" />
      <p className=" text-black mt-[12rem] font-montserrat text-xs font-medium leading-[19.98px] text-center ">Or Continue With</p>
      <div className="ml-[2rem] mt-[1rem] flex flex-row">
        <div className="h-[3rem] shadow-lg flex flex-row items-center justify-center p-2 bg-[white] rounded-xl left-[2rem] w-[9rem]">
          <img src="https://res.cloudinary.com/dnovcmruv/image/upload/v1715694291/facebook-3_1_sdm1m1.png" className="h-[3vh] mr-[5px] w-[6vw]"/>
         <p className=" w-76 h-17 font-montserrat text-sm font-bold leading-[17.07px] tracking-[0.5px] text-left text-black ">FaceBook</p> 
        </div> 
        <div className="h-[3rem] ml-3 shadow-lg flex flex-row items-center justify-center p-2 bg-[white] rounded-xl left-[2rem] w-[9rem]">
          <img src="https://res.cloudinary.com/dnovcmruv/image/upload/v1715695161/google-icon_1_elkf6r.png" className="h-[3vh] mr-[5px] w-[6vw]"/>
         <p className=" w-76 h-17 font-montserrat text-sm font-bold leading-[17.07px] tracking-[0.5px] text-left text-black ">Google</p> 
        </div> 
      </div>
      <p className="text-[#B2AC88] text-[12px] underline text-center mt-[1.5rem]">Forgot Your Password?</p>
      <div className="text-center">
      <button className=' w-[9rem] h-[3rem]
         mt-[2rem] rounded-2xl font-montserrat text-[16px] font-bold leading-[20.96px]  text-[#ffffff] bg-[#B2AC88]' onClick={LoginFuntion} >Login</button>
      </div>
    </div>
  )
} 
// w-108 h-20 absolute top-522 left-134
// font-montserrat text-xs font-medium leading-[19.98px] text-center

export default LoginPage
