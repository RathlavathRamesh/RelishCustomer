import { useRouter } from 'next/router'
import React, { useReducer } from 'react'

const SignupSuccess = () => {
    const router=useRouter();
    const CallVerifyPage=()=>{
       router.replace('/VerificationPage')
    }
  return (
    <div className='bg-[#FFFFFF] w-[100%] min-h-screen h-auto bg-cover flex flex-col  justify-center items-center'
    style={{ backgroundImage: "url('https://res.cloudinary.com/dnovcmruv/image/upload/v1715617620/Pattern_1_v6q46x.png')" }} >
          <div className='flex justify-center items-center flex-col'>
          <img src='https://res.cloudinary.com/dnovcmruv/image/upload/v1715775834/Illustration_xlsuds.png' alt='SuccessIcon' className='h-[10rem] w-[11rem]'/>
            <h1 className='text-[#B2AC88] font-montserrat text-[30px] font-bold leading-[39.31px] text-center mt-[10px]'>Congrats!</h1>
            <p className='text-[#09051C]  font-montserrat text-[23px] font-bold leading-[30.14px] text-center'>Your Profile Is Ready To Use</p>
          </div>
         <button className=' absolute  w-[9.5rem] h-[3rem] min-b-[3rem] xs:top-[20rem]  top-[40rem] mt-[2rem] rounded-[15px] font-montserrat text-[16px] font-bold leading-[20.96px]  text-[#ffffff] bg-[#B2AC88]' onClick={CallVerifyPage}>Try Order</button>
    </div>
  )
}

export default SignupSuccess
