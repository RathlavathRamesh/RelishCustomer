import { useRouter } from 'next/router'
import React from 'react'

const ForgotPassword = () => {
    const router=useRouter();
    const GotoResetPage=()=>{
      router.replace('/ResetPassword')
    }
  return (
    <div className='min-h-screen h-auto opacity-5 absolute w-[100%]  bg-cover bg-[#FEFEFF]'
        style={{ backgroundImage: "url('https://res.cloudinary.com/dnovcmruv/image/upload/v1715617620/Pattern_1_v6q46x.png')", opacity:"15"}}>
           <div className='h-[2rem] w-[2rem] bg-[#F2F1E6] top-[2.5rem] absolute left-[1.5rem] flex justify-center items-center rounded-[10px] '>
             <img src='https://res.cloudinary.com/dnovcmruv/image/upload/v1715748776/Vector_j9krmr.png' alt='slicearrow' className='w-[2vw]'/>
             <h1 className="w-[264px] h-[66px] text-[#09051C] absolute top-[4rem] left-[1.5rem] font-montserrat text-[25px] font-bold leading-[32.76px] text-left">
             Forgot password?
             </h1>
             <p className="w-[239px] h-[44px] absolute top-[7rem] left-[25px] text-[#000000]  font-montserrat text-[12px] font-medium leading-[21.66px] text-left">
             Select which contact details should we use to reset your password
            </p>
            </div>
            <div className='h-auto relative top-[15rem] flex items-center justify-center '>
            <div  className="mt-[4rem]  flex flex-row justify-between  text-[#3B3B3B] h-[5rem] rounded-xl shadow-md p-4 w-[287px] left-[3rem]  w-42 h-17 absolute top-398 left-53  leading-[17.07px] tracking-[0.5px] text-left
              placeholder-[#3B3B3B]">
                <div className='flex flex-row items-center'>
                    <img src='https://res.cloudinary.com/dnovcmruv/image/upload/v1715836950/Message_xq7zru.png' className='h-[4vh] w-[6vw]'/>
                    <input type='text' className='border-none outline-none mt-1.5 ml-2 text-[#3B3B3B]  font-montserrat text-xs font-normal leading-[17.07px] tracking-[0.5px] opacity-30' placeholder='Anamwp . . |'/>
                </div>
            </div>
            </div>
            <div className='flex flex-col h-screen items-center mb-[5rem] justify-end '>
            <button className=' w-[9.5rem] h-[3rem] 
               rounded-tl-[15px]  rounded-bl-[15px] rounded-tr-[15px]  mt-[2rem] rounded-br-[15px] font-montserrat text-[16px] font-bold leading-[20.96px]  text-[#ffffff] bg-[#B2AC88]' onClick={GotoResetPage}>Next</button>
            </div>
        </div>
  )
}

export default ForgotPassword
