import { useRouter } from 'next/router'
import React from 'react'

const SignUpProcess = () => {
    const router=useRouter();
    const callPaymentPage=()=>{
       router.replace("/PaymentMethod")
    }
  return (
    <div className='max-h-screen min-h-[100vh] h-auto opacity-5 absolute w-[100%]  bg-cover bg-[#FEFEFF]'
    style={{ backgroundImage: "url('https://res.cloudinary.com/dnovcmruv/image/upload/v1715617620/Pattern_1_v6q46x.png')", opacity:"15"}}
    >
       <div className='h-[2rem] w-[2rem] bg-[#F2F1E6] top-[2.5rem] absolute left-[1.5rem] flex justify-center items-center rounded-[10px] '>
         <img src='https://res.cloudinary.com/dnovcmruv/image/upload/v1715748776/Vector_j9krmr.png' alt='slicearrow' className='w-[2vw]'/>
         <h1 className="w-[264px] h-[66px] text-[#09051C] absolute top-16 left-[1.5rem] font-montserrat text-[25px] font-bold leading-[32.76px] text-left">
            Fill in your bio to get started
         </h1>
         <p className="w-[239px] h-[44px] absolute top-36 left-[25px] text-[#000000]  font-montserrat text-[12px] font-medium leading-[21.66px] text-left">
            This data will be displayed in your account profile for security
        </p>
           <div className='flex flex-row items-center'>
                <input type="text"
                className="mt-[4rem] text-[#3B3B3B] h-[3rem] rounded-xl outline-none shadow-md p-4 w-[287px]   w-42 h-17 absolute top-[12rem] 
                font-montserrat text-xs font-normal leading-[17.07px] text-left tracking-[0.5px] opacity-30
                placeholder-[#3B3B3B]"
                placeholder="First Name" />
                <input type="text"
                className="mt-[8rem] text-[#3B3B3B] h-[3rem] rounded-xl outline-none shadow-md p-4 w-[287px]   w-42 h-17 absolute top-[12rem] 
                font-montserrat text-xs font-normal leading-[17.07px] text-left tracking-[0.5px] opacity-30
                placeholder-[#3B3B3B]"
                placeholder="Last Name"/>
                <input type="text"
                className="mt-[12rem] text-[#3B3B3B] h-[3rem] rounded-xl outline-none shadow-md p-4 w-[287px]   w-42 h-17 absolute top-[12rem] 
                font-montserrat text-xs font-normal leading-[17.07px] text-left tracking-[0.5px] opacity-30
                placeholder-[#3B3B3B]"
                placeholder="Mobile Number"/>
           </div>
        </div>
        <div className='flex  flex-col h-screen text-center items-center justify-end '>
        <button className=' w-36 h-12 mt-[2rem] mb-16 rounded-[15px] font-montserrat text-[16px] font-bold leading-[20.96px]  text-[#ffffff] bg-[#B2AC88]' onClick={callPaymentPage}>Next</button>
        </div>
    </div>
  )
}

export default SignUpProcess
