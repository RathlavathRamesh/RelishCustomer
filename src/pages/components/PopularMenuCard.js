import React from 'react'

const PopularMenuCard = (props) => {
    const {item}=props;
    if(!item){
        return ;
    }
    console.log(item)
  return (
    <li className='h-24 p-2 items-center mt-4 w-80 shadow-lg flex justify-between bg-[#FFFFFF] rounded-2xl'>
       <div className='flex '>
         <img src={item.imageUrl} alt={item.name} className='h-16 w-16 rounded-[10px]'/>
         <div>
            <h1 className='font-montserrat text-[#09051C] text-[15px] ml-1 mt-1 font-semibold leading-[19.65px] text-left'>{item.name}</h1>
            <p className='text-[#3B3B3B] font-montserrat text-[14px] ml-1 mt-1 font-medium leading-[17.07px] tracking-[0.5px] text-left'>{item.disc}</p>
         </div>
       </div>
        <p className='text-[#B2AC88] font-montserrat text-[16px] font-semibold leading-[23.58px] '>{item.cost}</p>
    </li>
  )
}

export default PopularMenuCard
