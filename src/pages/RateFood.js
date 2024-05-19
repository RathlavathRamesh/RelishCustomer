import React from 'react'

const RateFood = () => {
    return (
        <div className='min-h-screen h-auto w-[100%] flex justify-center items-center  bg-cover  bg-[#FEFEFF]'
            style={{ backgroundImage: "url('https://res.cloudinary.com/dnovcmruv/image/upload/v1715617620/Pattern_1_v6q46x.png')", opacity:"15"}} >
              <div className='text-black flex flex-col items-center absolute'>
                 <img src='https://res.cloudinary.com/dnovcmruv/image/upload/v1716100359/Image_3_pilcxr.png' alt='ProfileImage' className='h-40 w-40 '/>
                 <h1 className='h-8 w-60 text-center text-[#09051C] font-montserrat text-[25px] font-semibold mt-2 leading-[32.76px] opacity-80'>Thank You! Enjoy Your Meal</h1>
                 <p className='w-50 h-3 text-[#3B3B3B] relative font-montserrat text-[14px] font-medium leading-[17.05px] tracking-[0.5px] text-center opacity-30 mt-12'>Please rate your Food</p>
                 <img src='https://res.cloudinary.com/dnovcmruv/image/upload/v1716093109/Star_Icon_xb1ss0.png' alt='StartIcon' className='h-8 w-56 mt-12'/>
              </div>
              <div className='text-black fixed bottom-10'>
                <div className='h-14 w-80 rounded-[10px] flex items-center border border-solid border-[#E8E8E8] justify-center opacity-80 shadow-md bg-[#FFFFFF]'>
                    <img src='https://res.cloudinary.com/dnovcmruv/image/upload/v1716095476/edit_Icon_mtlg8x.png' alt='EditIcon' className='h-6 w-6'/>
                    <input type='text' placeholder='Leave feedback' className='w-60 h-13 outline-none border-none bg-[#FFFFFF] font-montserrat placeholder:text-[14px] text-[14px] font-medium leading-[5px] tracking-[0.5px] ml-2'/>
                </div>
                <div className='flex justify-around mt-6'>
                <button className=' w-56 h-12 mb-4 rounded-2xl font-montserrat text-[14px] font-semibold leading-[40.96px]  text-[#ffffff] bg-[#B2AC88]'>Submit</button>
                <button className='w-20 h-12  ml-4 shadow-custom leading-4 rounded-lg font-Montserrat text-[#B2AC88]  bg-[#FFFFFF]'>Skip</button>
                </div>
              </div>
        </div>
      )
}

export default RateFood
