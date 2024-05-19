import React from 'react'

const ContactDetailsCard = ({Item}) => {
    if(!Item){
      return ;
    }
  return (
    <li className='bg-[#FFFFFF] text-black mt-4 pl-2 h-20 w-80 flex justify-between rounded-2xl shadow-xl'>
       <div className='flex'>
        <img src={Item.imageUrl} alt={Item.name} className='h-16 mt-2 ml-2 w-16'/>
        <div>
        <div>
            <h1 className='font-montserrat text-[#09051C] text-[15px] ml-1 mt-1 font-semibold leading-[19.65px] text-left'>{Item.name}</h1>
            <p className='text-[#3B3B3B] font-montserrat opacity-30 text-[14px] ml-1 mt-1 font-medium leading-[17.07px] tracking-[0.5px] text-left'>{Item.status}</p>
         </div>
        </div>
       </div>
       <p className='text-[#3B3B3B] font-montserrat text-[14px] pr-4 opacity-30 pt-4 ml-1 mt-1 font-medium leading-[17.07px] tracking-[0.5px] text-left'>{Item.time}</p>
    </li>
  )
}

export default ContactDetailsCard
