import React from 'react'

const NotificationCard = ({Item}) => {
  if(!Item){
    return ;
  }
  return (
    <li className='bg-[#FFFFFF] text-black flex p-2 relative h-28 w-80 mt-2 shadow-md rounded-[22px] '>
       <img src={Item.imageUrl} alt={Item.status} className='h-14 mt-4 ml-4  w-14'/>
       <div>
        <h1 className='#09051C font-montserrat text-[15px] font-semibold h-10 w-56 ml-2 leading-[19.65px] mt-4'>{Item.status}</h1>
        <p className='text-[#3B3B3B] opacity-30 ml-2 font-montserrat text-[14px] font-medium leading-[17.07px] tracking-[0.5px] '>{Item.time}</p>
       </div>
    </li>
  )
}

export default NotificationCard
