import React from 'react'

const TestimonalCard = ({Item}) => {
  if(!Item){
    return ;
  }
  return (
    <li className='bg-[#FFFFFF] h-36 w-[90%] flex justify-between mt-2 text-black rounded-[22px]  ml-5 shadow-xl'>
       <div className='flex'>
         <img src={Item.ImageUrl} alt={Item.name} className='h-16 w-16 m-4'/>
          <div>
            <h1 className='text-[#09051C] font-montserrat text-[15px] font-semibold leading-[19.65px] '>{Item.name}</h1>
            <p className='text-[#3B3B3B] opacity-30 font-rubik text-[12px] font-normal leading-[14.22px] tracking-[0.5px]'>{Item.date}</p>
            <p className='text-[#000000] font-montserrat text-[12px] font-medium leading-[21.66px] mt-3'>{Item.about}</p>
          </div>
       </div>
       <div className='flex items-center justify-center h-8 min-w-16 w-auto m-4 bg-gray-100 rounded-[19px]'>
        <img src='https://res.cloudinary.com/dnovcmruv/image/upload/v1716487486/Icon_Star_1_hdtlad.png' alt='star' className='h-5 w-5'/>
          <p className='text-[#B2AC88] font-montserrat text-[16px] font-bold leading-[28.88px'>5</p>
       </div>
    </li>
  )
}

export default TestimonalCard

