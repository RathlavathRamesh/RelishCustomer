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
           <div className='h-8 w-8 bg-[#F2F1E6] top-10 absolute left-6 flex justify-center items-center rounded-[10px] '>
             <img src='https://res.cloudinary.com/dnovcmruv/image/upload/v1715748776/Vector_j9krmr.png' alt='slicearrow' className='w-[2vw]'/>
             <h1 className="w-60 h-16 text-[#09051C] absolute top-16 left-6 font-montserrat text-[25px] font-bold leading-[32.76px] text-left">
             Forgot password?
             </h1>
             <p className="w-[239px] h-[44px] absolute top-[7rem] left-[25px] text-[#000000]  font-montserrat text-[12px] font-medium leading-[21.66px] text-left">
             Select which contact details should we use to reset your password
            </p>
            </div>
            <div className='h-auto relative top-60 flex items-center justify-center'>
                <div  className="mt-16  flex flex-row text-[#3B3B3B] h-20 rounded-xl shadow-md p-4 w-72 left-12  w-42 h-17 absolute leading-[17.07px] tracking-[0.5px] text-left
                placeholder-[#3B3B3B]">
                    <div className='flex flex-row items-center'>
                        <img src='https://res.cloudinary.com/dnovcmruv/image/upload/v1715836950/Message_xq7zru.png' alt='via sms' className='h-[4vh] w-[6vw]'/>
                    <div>
                        <p className='text-[#828282] font-montserrat text-[16px] font-medium leading-[24px] ml-2'>Via sms:</p>
                        <input type='text' className='border-none outline-none mt-1.5 ml-2 text-[#3B3B3B]  font-montserrat text-xs font-normal leading-[17.07px] tracking-[0.5px] ' placeholder='.... .... 7629'/>
                        </div> 
                    </div>
            </div>
            </div>
            <div className='h-auto relative top-60 flex items-center justify-center'>
                <div  className="mt-64  flex flex-row text-[#3B3B3B] h-20 rounded-xl shadow-md p-4 w-72 left-12  w-42 h-17 absolute leading-[17.07px] tracking-[0.5px] text-left
                placeholder-[#3B3B3B]">
                    <div className='flex flex-row items-center'>
                        <img src='https://res.cloudinary.com/dnovcmruv/image/upload/v1715870610/Email_nlwuyj.png' alt='EmailIcon' className='h-[4vh] w-[6vw]'/>
                    <div>
                        <p className='text-[#828282] font-montserrat text-[16px] font-medium leading-[24px] ml-2'>Via email:</p>
                        <input type='text' className='border-none outline-none mt-1.5 ml-2 text-[#3B3B3B]  font-montserrat text-xs font-normal leading-[17.07px] tracking-[0.5px] ' placeholder='.... .... gmail.com'/>
                        </div> 
                    </div>
            </div>
            </div>
            <div className='flex flex-col h-screen items-center mb-20 justify-end '>
            <button className=' w-32 h-12 mt-8 rounded-[15px] font-montserrat text-[16px] font-bold leading-[20.96px]  text-[#ffffff] bg-[#B2AC88]' onClick={GotoResetPage}>Next</button>
            </div>
        </div>
  )
}

export default ForgotPassword
