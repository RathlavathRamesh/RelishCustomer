import { useRouter } from 'next/router'
import React from 'react'

const SetLocationPage = () => {
    const router=useRouter();
    const CallSuccessPage=()=>{
        router.replace('/SignupSuccess')
    }
    return (
        <div className='min-h-screen h-auto opacity-5 absolute w-[100%]  bg-cover bg-[#FEFEFF]'
        style={{ backgroundImage: "url('https://res.cloudinary.com/dnovcmruv/image/upload/v1715617620/Pattern_1_v6q46x.png')", opacity:"15"}}
        >
           <div className='h-[2rem] w-[2rem] bg-[#F2F1E6] top-[2.5rem] absolute left-[1.5rem] flex justify-center items-center rounded-[10px] '>
             <img src='https://res.cloudinary.com/dnovcmruv/image/upload/v1715748776/Vector_j9krmr.png' alt='slicearrow' className='w-[2vw]'/>
             <h1 className="w-[264px] h-[66px] text-[#09051C] absolute top-[4rem] left-[1.5rem] font-montserrat text-[25px] font-bold leading-[32.76px] text-left">
             Set Your Location 
             </h1>
             <p className="w-[239px] h-[44px] absolute top-[7rem] left-[25px] text-[#000000]  font-montserrat text-[12px] font-medium leading-[21.66px] text-left">
             This data will be displayed in your account profile for security
            </p>
            </div>
                <div className='flex'>
                    <img src='https://res.cloudinary.com/dnovcmruv/image/upload/v1715773049/Pin_Logo_hwkqrd.png' alt='locationIcon' className='top-[15.5rem] absolute left-[2rem] h-[2rem] w-[2rem]'/>
                    <p className='text-[#09051C] w-[107px] h-[20px] absolute top-[16rem] left-[75px] 
                font-montserrat text-[15px] font-semibold leading-[19.65px] text-left'>Your Location</p>
                </div>
                <div className="w-[322px] h-[57px] absolute top-[300px] flex justify-center items-center left-[27px] 
                    bg-[#F6F6F6] rounded-xl focus:outline-none border-none shadow-[0_0_50px_0px_rgba(90,108,234,0.05)] ">
                <input
                    type="text" className='w-[322px] h-[57px] left-[143px]
                    text-[14px] font-rubik font-normal outline-none border-none leading-[16.59px] tracking-[0.5px] text-center text-black' placeholder='Set Location'
                    />
                
            </div>
            <div className='flex flex-col h-screen items-center mb-[5rem] justify-end '>
            <button type='button' className=' w-[9.5rem] h-[3rem] 
              rounded-[15px] mt-[2rem]  font-montserrat text-[16px] font-bold  leading-[20.96px]  text-[#ffffff] bg-[#B2AC88]' onClick={CallSuccessPage}>Next</button>
            </div>
        </div>
      )
}


export default SetLocationPage
