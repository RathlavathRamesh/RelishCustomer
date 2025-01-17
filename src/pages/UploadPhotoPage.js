import { useRouter } from 'next/router'
import React from 'react'

const UploadPhotoPage = () => {
    const router=useRouter();
   const GoToPreview=()=>{
        router.replace('/UploadPreview')
   }
  return (
    <div className='min-h-screen h-auto opacity-5 absolute w-[100%]  bg-cover bg-[#FEFEFF]'
    style={{ backgroundImage: "url('https://res.cloudinary.com/dnovcmruv/image/upload/v1715617620/Pattern_1_v6q46x.png')", opacity:"15"}}
    >
       <div className='h-8 w-8 bg-[#F2F1E6] top-10 absolute left-6 flex justify-center items-center rounded-[10px] '>
         <img src='https://res.cloudinary.com/dnovcmruv/image/upload/v1715748776/Vector_j9krmr.png' alt='slicearrow' className='w-[2vw]'/>
         <h1 className="w-[264px] h-[66px] text-[#09051C] absolute top-[4rem] left-[1.5rem] font-montserrat text-[25px] font-bold leading-[32.76px] text-left">
         Upload Your Photo Profile
         </h1>
         <p className="w-64 h-11 absolute top-32 left-[25px] text-[#000000]  font-montserrat text-[12px] font-medium leading-[21.66px] text-left">
         This data will be displayed in your account profile for security
        </p>
           <div className='flex flex-row items-center '>
                <div
                className="mt-8 pb-2 text-[#3B3B3B] flex flex-col justify-center items-center   rounded-2xl outline-none shadow-xl p-4 w-80 h-32 absolute top-[12rem] 
                font-montserrat text-xs font-normal leading-[17.07px] text-left tracking-[0.5px] 
                " >
                 <img src='https://res.cloudinary.com/dnovcmruv/image/upload/v1715754038/Gallery_y4z1v8.png' alt='Gallary' className='h-[50px] w-[50px]'/>
                 <h2 className=" h-[25px] pt-[2px]  text-[#000000] font-montserrat text-[14px] font-bold leading-[25.27px]">
                    From Gallery
                </h2>
                </div>
                <div
                className="mt-44 pb-2 text-[#3B3B3B] flex flex-col justify-center items-center   rounded-xl outline-none shadow-xl p-4 w-80 h-32 absolute top-[12rem] 
                font-montserrat text-xs font-normal leading-[17.07px] text-left tracking-[0.5px] 
                " >
                 <img src='https://res.cloudinary.com/dnovcmruv/image/upload/v1715761854/camera_tgwoto.png' alt='Gallary' className='h-14 w-14 pb-2'/>
                 <h2 className="w-[94px] h-[25px] absolute pt-[2px]  text-[#000000] mt-[4rem] font-montserrat text-[14px] font-bold leading-[25.27px]">
                 Take Photo
                </h2>
                </div>
           </div>
        </div>
        <div className='flex flex-col h-screen items-center mb-4 justify-end '>
          <button className=' w-32 h-12 rounded-[15px] font-montserrat text-[16px] font-bold leading-[20.96px]  text-[#ffffff] bg-[#B2AC88]' onClick={GoToPreview}>Next</button>
        </div>
    </div>
  )
}

export default UploadPhotoPage
