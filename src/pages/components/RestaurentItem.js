import React from 'react'

const RestaurentItem = (props) => {
    const {cartItem}=props 
    if(!cartItem){
      return ;
    }
    console.log(cartItem)
  return (
    <li className='text-black bg-[#FFFFFF] h-48 w-36  ml-4 top-4 flex flex-col items-center justify-center rounded-xl shadow-custom'>
      <img src={cartItem.ImageUrl} alt={cartItem.name} className='h-20 w-24'/>
      <h1 className='text-[#000000] h-5 min-w-20 w-auto font-montserrat text-[14px] font-semibold leading-[20.96px] text-center'>{cartItem.name}</h1>
      <p className='text-[#000000] opacity-20 relative font-montserrat text-[13px] font-light leading-[17.03px] text-left'>{cartItem.time}</p>
    </li>
  )
}

export default RestaurentItem
