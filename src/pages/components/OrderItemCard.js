import React from 'react'

const OrderItemCard = ({Item}) => {
    if(!Item){
      return ;
    }
  return (
    <l1 className="text-black h-24 w-80 bg-[#FFFFFF] shadow-md mt-4 rounded-[22px]">
       <div className='flex justify-between items-center '>
          <div className='flex '>
          <img src={Item.imageUrl} alt={Item.MenuName} className='h-16 mt-4 ml-2 w-16'/>
              <div className='ml-3 mt-4'>
                    <h1 className='font-montserrat text-[#09051C] text-[15px] ml-1 mt-1 font-medium leading-[19.65px] text-left'>{Item.MenuName}</h1>
                    <p className='text-[#3B3B3B] font-montserrat opacity-30 text-[14px] ml-1 mt-1 font-medium leading-[17.07px] tracking-[0.5px] text-left'>{Item.RestaurentName}</p>
                    <p className='text-[#B2AC88] font-montserrat text-[16px] font-semibold leading-[23.58px] '>{Item.price}</p>
                </div>
          </div>
          <div className='flex justify-around items-center p-2 mt-6'>
              <img src='https://res.cloudinary.com/dnovcmruv/image/upload/v1716206039/Icon_Minus_oy2afb.png' alt='MinusIcon' className='h-6 w-6 m-2'/>
              <p>1</p>
              <img src='https://res.cloudinary.com/dnovcmruv/image/upload/v1716206204/Icon_Plus_fbvi2l.png' alt='PlusIcon' className='h-6 w-6  m-2'/>
          </div>
       </div>
    </l1>
  )
}

export default OrderItemCard
